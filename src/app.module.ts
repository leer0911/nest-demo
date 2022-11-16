import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ProductModule, UserModule],
})
export class AppModule {}
