/// <reference types="node" />
import { Request } from "express";
export declare type RawBodyRequest = Request & {
    rawBody: Buffer;
};
