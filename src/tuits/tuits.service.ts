import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tuit } from './tuit.entity';
import { CreateTuitDto } from "./dto";
import { UpdateTuitDto } from "./dto";

import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class TuitsService {
  constructor(
    @InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>
  ) {
  }
  
  async create({ message, email, user }: CreateTuitDto) {
    const tuit: Tuit = await this.tuitRepository.create({message, email, user});
    return this.tuitRepository.save(tuit);
  }

  async findAll(): Promise<Tuit[]> {
    return await this.tuitRepository.find({
      order: {
        id: {direction: "DESC"}
      }
    });
  }

  async findOne(id: number): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOne({
      where: { id }
    });
    if (!tuit){
      throw new NotFoundException('Tuit not found');
    }
    return tuit;
  }

  async update(id: number, { message }: UpdateTuitDto) {
    const tuit: Tuit = await this.tuitRepository.preload({
      id, message
    });
    if (!tuit){
      throw  new NotFoundException('Tuit not found');
    }
    return tuit;
  }

  async remove(id: number) {
    const tuit: Tuit = await this.tuitRepository.findOneById(id);
    if (!tuit){
      throw new NotFoundException('Tuit not found');
    }
    await this.tuitRepository.remove(tuit);
  }
}

