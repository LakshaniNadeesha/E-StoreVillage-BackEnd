import { DeepPartial, FindConditions, FindManyOptions, FindOneOptions, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { IPagination } from "../pagination";
import { IBaseRepository } from "./interface/base-repository.interface";
export declare abstract class BaseRepository<T> implements IBaseRepository<T> {
    private entity;
    protected constructor(entity: Repository<T>);
    getAll(where?: FindManyOptions["where"], select?: FindManyOptions["select"], relations?: FindManyOptions["relations"], sort?: FindManyOptions["order"], page?: IPagination): Promise<[T[], number]>;
    count(filter?: Record<string, unknown>): Promise<number>;
    getOneById(id: number, select?: FindManyOptions["select"], relations?: FindManyOptions["relations"]): Promise<T>;
    getOne(where: FindOneOptions["where"], select?: FindOneOptions["select"], relations?: FindManyOptions["relations"]): Promise<T>;
    create(data: DeepPartial<T>): T;
    createMany(data: DeepPartial<T>[]): Promise<T[]>;
    save(data: DeepPartial<T>): Promise<T>;
    createAndGetEntity(data: DeepPartial<T>): Promise<T>;
    update(id: number, data: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
    updateAndGetEntity(id: number, data: QueryDeepPartialEntity<T>): Promise<T>;
    updateAll(criteria: number | number[] | FindConditions<T>, partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    removeWithCriteria(where: FindManyOptions["where"]): Promise<import("typeorm").DeleteResult>;
    softDelete(id: number): Promise<UpdateResult>;
    softDeleteWithCriteria(where: FindManyOptions["where"]): Promise<UpdateResult>;
}
