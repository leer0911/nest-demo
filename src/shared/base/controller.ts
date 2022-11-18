import { Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaginationDto } from '@/shared/dto/pagination-query.dto';
import { BaseService } from './service';

export class BaseController<C, U> {
  constructor(private readonly _service: BaseService) {}

  @Post()
  create(@Body() createUserDto: C) {
    return this._service.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query: U & PaginationDto) {
    return this._service.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this._service.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: U) {
    return this._service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
