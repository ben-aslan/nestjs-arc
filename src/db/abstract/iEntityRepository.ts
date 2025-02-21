import { RootFilterQuery, Document, Types, UpdateWithAggregationPipeline, UpdateQuery } from "mongoose";
import IEntity from "../../models/abstract/iEntity";

abstract class IEntityRepository<T extends IEntity> {
    abstract find(filter: RootFilterQuery<T>): Promise<(Document<unknown, {}, T> & T & Required<{ _id: Types.ObjectId; }> & { __v: number; })[]>
    abstract findOne(filter?: RootFilterQuery<T> | undefined): Promise<(Document<unknown, {}, T> & T & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null>
    abstract findById(id: any): Promise<(Document<unknown, {}, T> & T & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null>
    abstract add(entity: T): Promise<void>
    abstract deleteOne(filter?: RootFilterQuery<T> | undefined):Promise<void>
    abstract updateOne(filter: RootFilterQuery<T>, update: UpdateWithAggregationPipeline | UpdateQuery<T>):Promise<void>
}

export default IEntityRepository