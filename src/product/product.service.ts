import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    return await this.productModel.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate({ _id: id }, updateProductDto, { new: true });
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndRemove(id);
  }
}
