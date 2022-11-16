import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule, ProductModule, UserModule],
})
export class AppModule {}
