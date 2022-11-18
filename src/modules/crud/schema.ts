import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CRUD extends Document {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  desc: string;
}

export const CRUDSchema = SchemaFactory.createForClass(CRUD);
