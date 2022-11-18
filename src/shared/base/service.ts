import { Model } from 'mongoose';
import { PaginationDto } from '../dto/pagination-query.dto';

/**
 * 抽象 CRUD 操作的基础服务
 */
export abstract class BaseService<M = unknown, C = unknown, U = unknown> {
  constructor(private readonly _model: Model<M>) {}

  /**
   * 获取指定条件全部数据
   */
  async paginator(query: U & PaginationDto) {
    const { limit, offset } = query;
    const list = await this._model.find().skip(offset).limit(limit).exec();
    const total = await this._model.count();
    return { list, total };
  }

  /**
   * 获取指定条件全部数据
   */
  async findAll(query: U) {
    return this._model.find(query);
  }

  /**
   * 获取单条数据
   */
  async findOne(query: U) {
    return this._model.findOne(query);
  }

  /**
   * 根据 ID 获取单条数据
   */
  async findById(id: string) {
    return this._model.findById(id);
  }

  /**
   * 创建一条数据
   */
  async create(body: C) {
    return this._model.create(body);
  }

  /**
   * 删除指定 ID 数据
   */
  async remove(id: string) {
    return this._model.findByIdAndRemove(id);
  }

  /**
   * 更新指定 ID 数据
   */
  async update(id: string, body: U) {
    return this._model.findByIdAndUpdate(id, body);
  }
}
