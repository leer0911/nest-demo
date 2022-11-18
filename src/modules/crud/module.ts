import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CRUD, CRUDSchema } from './schema';
import { CRUDService } from './service';
import { CRUDController } from './controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: CRUD.name, schema: CRUDSchema }])],
  controllers: [CRUDController],
  providers: [CRUDService],
})
export class CRUDModule {}
