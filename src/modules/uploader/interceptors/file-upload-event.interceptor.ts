import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { IFileDirectoryMeta } from "../interfaces";

@Injectable()
export class EventImageUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const directoryMeta: IFileDirectoryMeta = {
      section: "events",
    };

    request.directoryMeta = directoryMeta;

    return next.handle();
  }
}
