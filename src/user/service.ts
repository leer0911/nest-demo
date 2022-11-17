import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { User } from './schema';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const finalPassword = await bcrypt.hash(password, 2);
    return await this.UserModel.create({ password: finalPassword, ...rest });
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    const list = await this.UserModel.find().skip(offset).limit(limit).exec();
    const total = await this.UserModel.count();
    return { list, total };
  }

  async findOne(id: string) {
    return await this.UserModel.findById(id);
  }

  async findOneByName(username: string) {
    return await this.UserModel.findOne({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.UserModel.findByIdAndUpdate({ _id: id }, updateUserDto, { new: true });
  }

  async remove(id: string) {
    return await this.UserModel.findByIdAndRemove(id);
  }
}
