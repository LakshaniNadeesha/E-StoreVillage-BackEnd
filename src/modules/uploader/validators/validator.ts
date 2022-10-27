import { BadRequestException } from "@nestjs/common";

export const fileNameLengthValidator = (filename: string): Record<string, boolean | string> => {
  if (filename && filename.length > 200) {
    return { status: false, msg: "File name is too long" };
  }
  return { status: true };
};

export const fileTypeVideoValidator = (req: any, file: any, callback: any) => {
  const status = fileNameLengthValidator(file.originalname);
  if (!status.status) {
    return callback(new BadRequestException(`${status.msg}`), false);
  }
  if (!file.originalname.match(/\.(mp4|mov|MOV)$/i)) {
    return callback(new BadRequestException("Invalid Video file type"), false);
  }
  return callback(null, true);
};

export const fileTypeImageValidator = (req: any, file: any, callback: any) => {
  const status = fileNameLengthValidator(file.originalname);
  if (!status.status) {
    return callback(new BadRequestException(`${status.msg}`), false);
  }
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|doc|docx|xlsx|xls|ppt|pptx|pdf|vsd|vsdx)$/i)) {
    return callback(new BadRequestException("Invalid Image file type"), false);
  }
  return callback(null, true);
};
