import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
