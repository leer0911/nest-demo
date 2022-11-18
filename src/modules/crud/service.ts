import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CRUD } from './schema';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { BaseService } from '@/shared/base/service';

@Injectable()
export class CRUDService extends BaseService<CRUD, CreateDto, UpdateDto> {
  constructor(@InjectModel(CRUD.name) private readonly model: Model<CRUD>) {
    super(model);
  }
}
