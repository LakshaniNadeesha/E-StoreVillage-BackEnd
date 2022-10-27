import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { IFileDirectoryMeta } from "../interfaces";

@Injectable()
export class SpeakerProfileUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const directoryMeta: IFileDirectoryMeta = {
      section: "speakers",
    };

    request.directoryMeta = directoryMeta;

    return next.handle();
  }
}
