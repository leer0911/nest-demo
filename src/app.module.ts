import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@/modules/auth/module';
import { UserModule } from '@/modules/user/module';
import { CRUDModule } from '@/modules/crud/module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule, UserModule, CRUDModule],
})
export class AppModule {}
