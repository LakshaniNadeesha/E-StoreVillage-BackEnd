"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(entity) {
        this.entity = entity;
    }
    async getAll(where, select, relations, sort, page) {
        const options = {};
        if (select) {
            options["select"] = select;
        }
        if (where) {
            options["where"] = where;
        }
        if (relations) {
            options["relations"] = relations;
        }
        if (sort) {
            options["order"] = sort;
        }
        if (page) {
            options["skip"] = page.skip;
            options["take"] = page.limit;
        }
        return await this.entity.findAndCount(options);
    }
    async count(filter) {
        return await this.entity.count(filter);
    }
    async getOneById(id, select, relations) {
        const options = {};
        options["where"] = { id };
        if (select) {
            options["select"] = select;
        }
        if (relations) {
            options["relations"] = relations;
        }
        return await this.entity.findOne(options);
    }
    async getOne(where, select, relations) {
        const options = { where };
        if (select) {
            options["select"] = select;
        }
        if (relations) {
            options["relations"] = relations;
        }
        return await this.entity.findOne(options);
    }
    create(data) {
        return this.entity.create(data);
    }
    async createMany(data) {
        return this.entity.save(data);
    }
    async save(data) {
        return this.entity.save(data);
    }
    async createAndGetEntity(data) {
        return this.entity.save(data).then(async (entity) => await this.getOneById(entity.id));
    }
    async update(id, data) {
        return this.entity.update(id, data);
    }
    async updateAndGetEntity(id, data) {
        return this.entity.update(id, data).then(async () => await this.getOneById(id));
    }
    async updateAll(criteria, partialEntity) {
        return await this.entity.update(criteria, partialEntity);
    }
    async remove(id) {
        return await this.entity.delete(id);
    }
    async removeWithCriteria(where) {
        return await this.entity.delete(where);
    }
    async softDelete(id) {
        return await this.entity.softDelete(id);
    }
    async softDeleteWithCriteria(where) {
        return await this.entity.softDelete(where);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map