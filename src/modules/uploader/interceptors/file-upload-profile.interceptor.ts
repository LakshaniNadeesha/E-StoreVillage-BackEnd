import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { ITokenUser } from "src/core/interface";
import { IFileDirectoryMeta } from "../interfaces";

@Injectable()
export class UserProfileUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const directoryMeta: IFileDirectoryMeta = {
      section: "profile",
    };
    const user: ITokenUser = request.user;
    if (user && user.sub) {
      directoryMeta.id = user.sub;
    }
    request.directoryMeta = directoryMeta;

    return next.handle();
  }
}
