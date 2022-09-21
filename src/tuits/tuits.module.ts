import { Module } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { TuitsController } from './tuits.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tuit } from "./tuit.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitsController],
  providers: [TuitsService]
})
export class TuitsModule {}
