import { PartialType } from '@nestjs/mapped-types';
import { CreateTuitDto } from './create-tuit.dto';
import { IsString } from "class-validator";

export class UpdateTuitDto extends PartialType(CreateTuitDto) {

  @IsString()
  readonly message: string;

}
