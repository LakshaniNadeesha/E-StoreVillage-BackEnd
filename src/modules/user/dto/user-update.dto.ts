import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UpdateUserDto {
  @ApiPropertyOptional()
  first_name: string;

  @ApiPropertyOptional()
  last_name: string;

  @ApiPropertyOptional()
  phoneNumber?: string;

  @ApiPropertyOptional()
  numFriends?: string;

  @ApiPropertyOptional()
  bio?: string;

  @ApiPropertyOptional()
  status?: number;

  @ApiPropertyOptional()
  socialLink: string;
}

export class UpdateUserPasswordDto {
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  current_password: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  new_password: string;
}
