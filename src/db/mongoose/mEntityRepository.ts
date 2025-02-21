import mongoose, { RootFilterQuery, Types, Document } from "mongoose";
import IEntity from "../../models/abstract/iEntity";
import IEntityRepository from "../abstract/iEntityRepository";

class MEntityRepository<TEntity extends IEntity> implements IEntityRepository<TEntity> {
    model: mongoose.Model<TEntity>

    constructor(model: mongoose.Model<TEntity>) {
        this.model = model
    }

    async updateOne(filter: RootFilterQuery<TEntity>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<TEntity>): Promise<void> {
        await this.model.updateOne(filter, update)
    }
    async deleteOne(filter?: RootFilterQuery<TEntity> | undefined): Promise<void> {
        await this.model.deleteOne(filter)
    }
    async add(entity: TEntity): Promise<void> {
        let result = await this.model.create(entity);
        result.save()
    }
    async find(filter: mongoose.RootFilterQuery<TEntity>): Promise<(Document<unknown, {}, TEntity> & TEntity & Required<{ _id: Types.ObjectId; }> & { __v: number; })[]> {
        return await this.model.find(filter)
    }
    async findOne(filter?: RootFilterQuery<TEntity> | undefined): Promise<(Document<unknown, {}, TEntity> & TEntity & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null> {
        return await this.model.findOne(filter)
    }
    async findById(id: any): Promise<(Document<unknown, {}, TEntity> & TEntity & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null> {
        return await this.model.findById(id)
    }

}

export default MEntityRepository