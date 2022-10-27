import { IPagination } from "src/core/pagination";
import { DeepPartial, FindConditions, FindManyOptions, FindOneOptions, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
export interface IBaseRepository<T> {
    create(data: DeepPartial<T>): T;
    getAll(where?: FindManyOptions["where"], select?: FindManyOptions["select"], relations?: FindManyOptions["relations"], sort?: FindManyOptions["order"], page?: IPagination): Promise<[T[], number]>;
    count(filter?: Record<string, unknown>): Promise<number>;
    getOneById(id: number, select?: FindManyOptions["select"], relations?: FindManyOptions["relations"]): Promise<T>;
    getOne(where: FindOneOptions["where"], select?: FindOneOptions["select"], relations?: FindManyOptions["relations"]): Promise<T>;
    save(data: DeepPartial<T>): Promise<T>;
    createAndGetEntity(data: DeepPartial<T>): Promise<T>;
    update(id: number, data: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
    updateAndGetEntity(id: number, data: QueryDeepPartialEntity<T>): Promise<T>;
    updateAll(criteria: number | number[] | FindConditions<T>, partialEntity: QueryDeepPartialEntity<T>): any;
    remove(id: number): any;
    softDelete(id: number): any;
}
