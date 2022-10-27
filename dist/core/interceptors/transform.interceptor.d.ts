import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
export interface Response<T> {
    data: T;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    private readonly entityClass;
    constructor(entityClass: any);
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
