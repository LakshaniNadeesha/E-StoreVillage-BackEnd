/// <reference types="node" />
import { NestMiddleware } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";
import { NextFunction } from "express";
export declare class RawBodyMiddleware implements NestMiddleware {
    use(req: IncomingMessage, res: ServerResponse, next: NextFunction): any;
}
