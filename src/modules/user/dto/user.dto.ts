import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import { UserRole } from "../enum";

export class UserDto {
  //user details
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @ApiPropertyOptional()
  last_name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phoneNumber?: string;

  @ApiProperty()
  role?: UserRole;

  // @IsNotEmpty()
  @MinLength(8)
  @ApiPropertyOptional()
  password: string;

  // @IsNotEmpty()
  @MinLength(8)
  @ApiPropertyOptional()
  r_password: string;

  @ApiPropertyOptional()
  numFriends?: string;


  @ApiPropertyOptional()
  bio?: string;

  @ApiPropertyOptional()
  socialLink: string;

}
