import { ApiProperty } from "@nestjs/swagger";

export class SmsUserDto {
  @ApiProperty()
  userEmail: string;
}

export class CheckVerificationCodeDto {
  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  userCode: string;
}
