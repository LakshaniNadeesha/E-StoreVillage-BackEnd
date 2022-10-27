import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { IFileDirectoryMeta } from "../interfaces";

@Injectable()
export class VesselFileUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const directoryMeta: IFileDirectoryMeta = {
      section: "vessel",
    };

    request.directoryMeta = directoryMeta;

    return next.handle();
  }
}
