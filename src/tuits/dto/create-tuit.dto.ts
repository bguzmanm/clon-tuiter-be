import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTuitDto {

  @IsNumber()
  id: number = 0;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  message: string;
}
