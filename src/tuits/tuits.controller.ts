import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { CreateTuitDto } from "./dto";
import { UpdateTuitDto } from "./dto";
import { Tuit } from "./tuit.entity";

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitsService: TuitsService) {}

  @Post()
  create(@Body() createTuitDto: CreateTuitDto): Promise<Tuit> {
    console.log('Entré a post');
    return this.tuitsService.create(createTuitDto);
  }

  @Get()
  findAll(): Promise<Tuit[]> {
    return this.tuitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tuit> {
    return this.tuitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTuitDto: UpdateTuitDto): Promise<Tuit>  {
    return this.tuitsService.update(+id, updateTuitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tuitsService.remove(+id);
  }
}
