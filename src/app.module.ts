import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";

//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TuitsModule } from './tuits/tuits.module';
import { DatabaseModule } from './database/database.module';


@Module({
  //controllers: [AppController],
  //providers: [AppService],
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TuitsModule,
    DatabaseModule],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService){
    AppModule.port = +this.configService.get('PORT');
  }
}
