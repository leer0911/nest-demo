import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from '@/shared/base/controller';
import { CRUDService } from './service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('crud')
@UseGuards(AuthGuard('jwt'))
export class CRUDController extends BaseController<CreateDto, UpdateDto> {
  constructor(private readonly service: CRUDService) {
    super(service);
  }
}
