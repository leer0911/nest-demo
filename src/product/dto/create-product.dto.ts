import { MaxLength, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly price: number;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  readonly description: string;
}
