import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Tuit {
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column()
  email: string;
  @Column()
  user: string;
  @Column()
  message: string;

  constructor(id?, email?, user?, message?) {
    this.id = id;
    this.email = email;
    this.user = user;
    this.message = message;
  }


}
