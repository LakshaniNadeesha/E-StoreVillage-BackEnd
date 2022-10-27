import { ValidationError } from "@nestjs/common";
import { ValidationException } from "./validation.exception";
export declare const customExceptionFactory: (errors: ValidationError[]) => ValidationException;
