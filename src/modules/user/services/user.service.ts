import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";
import { IPagination } from "src/core/pagination";
import SmsService from "src/core/services/sms.service";
import { User } from "src/entities";
import { CheckVerificationCodeDto } from "../dto/sms.dto";
import { FilterUserDto } from "../dto/user-filter.dto";
import { UpdateUserDto, UpdateUserPasswordDto } from "../dto/user-update.dto";
import { UserDto } from "../dto/user.dto";
import { UserRole } from "../enum";
import { IUser } from "../interface/user.interface";
import { UsersRepository } from "./../repositories/user.repository";
@Injectable()
export class UserService {

  constructor(private readonly userRepo: UsersRepository, private readonly smsService: SmsService) { }
  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }
  async create(user: UserDto) {
    const userExist = await this.userRepo.getByEmail(user.email);
    if (userExist) {
      throw new BadRequestException(`User already exists with ${user.email}`);
    }
    let newUser: IUser = {};

    const passwordHash = await hash(user.r_password, 10);
    if (user.role === UserRole.Customer) {
      newUser = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: passwordHash,
        status: 1,
        role: UserRole.Customer,
        failed_login_attempt: 0,
      };

    } else if (user.role === UserRole.Seller) {
      newUser = {
        first_name: user.first_name,
        last_name: user.first_name,
        email: user.email,
        numFriends: user.numFriends,
        socialLink: user.socialLink,
        bio: user.bio,
        phoneNumber: user.phoneNumber,
        password: passwordHash,
        status: 0,
        role: UserRole.Seller,
        failed_login_attempt: 0,
      };
    } else if (user.role === UserRole.Manager) {
      newUser = {
        first_name: user.first_name,
        last_name: user.first_name,
        email: user.email,
        numFriends: user.numFriends,
        socialLink: user.socialLink,
        bio: user.bio,
        phoneNumber: user.phoneNumber,
        password: passwordHash,
        status: 1,
        role: UserRole.Manager,
        failed_login_attempt: 0,
      };
    } else {
      throw new BadRequestException(`User role issue ${user.email}`);
    }





    return this.userRepo.save(newUser);
  }

  async setStatus(id: number, status: number): Promise<IUser> {
    const statusSet = await this.userRepo.updateAndGetEntity(id, { status: status });
    return statusSet;
  }

  async findOne(id: number): Promise<IUser> {
    const user = await this.userRepo.getOneById(id);
    return user;
  }

  async findAllUsers(filter: FilterUserDto, page: IPagination) {
    filter['role'] = UserRole.Customer;
    return await this.userRepo.getAll(filter, null, null, null, page);
  }

  async findAllSales(filter: FilterUserDto, page: IPagination) {
    filter['role'] = UserRole.Seller;
    return await this.userRepo.getAll(filter, null, null, null, page);
  }

  /**
   * Change user password
   * @param id
   * @param changePasswordDto
   * @returns
   */
  async changePassword(id: string, changePasswordDto: UpdateUserPasswordDto) {
    const uid = parseInt(id);
    const user = await this.userRepo.getOneById(uid);
    if (!user) {
      throw new ForbiddenException(`Invalid User`);
    }
    const isPasswordCorrect = await compare(changePasswordDto.current_password, user.password);
    if (!isPasswordCorrect) {
      throw new BadRequestException(`Invalid current password`);
    }
    const newPassword = await hash(changePasswordDto.new_password, 10);
    return await this.userRepo.updatePassword(uid, newPassword).then(async (res) => {
      if (res) {
        return true;
      } else {
        throw new ForbiddenException(`Password not updated`);
      }
    });
  }

  async welcomeMail(id: number) {
    const user = await this.userRepo.getOneById(id);
    return user;
  }

  async confirmPhoneNumber(verificationData: CheckVerificationCodeDto) {
    console.log(verificationData.userEmail);
    const userExist = await this.userRepo.getOne({ email: verificationData.userEmail });
    console.log(userExist);
    if (userExist.isPhoneNumberConfirmed) {
      throw new BadRequestException(`Phone number already confirmed`);
    }
    const result = await this.smsService.tokenVerify(userExist.phoneNumber, verificationData.userCode);
    if (!result.valid || result.status !== "approved") {
      throw new BadRequestException("Wrong code provided");
    }
    return this.userRepo.update(userExist.id, { isPhoneNumberConfirmed: true }).then(async (res) => {
      await this.smsService.sendSMS(userExist.phoneNumber, `Welcome to EStore`);
      return res;
    });
  }

  async initiatePhoneNumberVerification(email: string) {
    const userExist = await this.userRepo.getByEmail(email);
    if (userExist.isPhoneNumberConfirmed) {
      throw new BadRequestException(`Phone number already confirmed`);
    }
    await this.smsService.initiatePhoneNumberVerification(userExist.phoneNumber);
  }
}
