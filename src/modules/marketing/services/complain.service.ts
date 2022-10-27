import { BadRequestException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { IPagination } from "src/core/pagination";
import { Complain, User } from "src/entities";
import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
import { EmailService } from 'src/modules/email/services/email.service';
import { CreateComplainDto, CreateComplainReplyDto, FilterComplainDto, UpdateComplainDto } from "../dto/complain.dto";
import { IComplainRepository, IComplainRepositoryInterface } from "../repositories/interfaces/complain-repository.interface";
@Injectable()
export class ComplainService {

  constructor(
    @Inject(`${IComplainRepositoryInterface}`) private readonly complainRepository: IComplainRepository,
    private readonly mailService: MailerService) { }
  async createReply(createComplainDto: CreateComplainReplyDto) {
    const reply = createComplainDto.complain_reply;
    return await this.mailService
      .sendMail({
        to: createComplainDto.user,
        subject: "Complain Reply",
        template: "account-welcome",
        context: { reply },
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new InternalServerErrorException();
      });
  }
  deleteOneById(id: number) {
    return this.complainRepository.remove(id);
  }
  getOneById(id: number) {
    return this.complainRepository.getOneById(id, null, ['userComplain']);
  }
  update(updatecomplainDto: UpdateComplainDto, id: number) {
    return this.complainRepository.update(id, updatecomplainDto);
  }
  async create(createcomplainDto: CreateComplainDto) {
    const newCOmplain = new Complain()
    newCOmplain.complain = createcomplainDto.complain;
    newCOmplain.name = createcomplainDto.name;
    const newComp = this.complainRepository.create(newCOmplain);
    const compUser = new User();
    compUser.id = createcomplainDto.user
    newComp.userComplain = compUser;

    return this.complainRepository.save(newCOmplain);

  }
  async findAll(filter: FilterComplainDto, page: IPagination): Promise<[any, any] | PromiseLike<[any, any]>> {
    filter.limit ? delete filter.limit : null;
    filter.page ? delete filter.page : null;

    return await this.complainRepository.getAll(filter, null, ['userComplain'], null, page).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
