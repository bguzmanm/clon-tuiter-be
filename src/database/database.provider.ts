import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { Environment } from "../common/enum";
import { ConnectionOptions } from "typeorm";
import { Tuit } from "../tuits/tuit.entity";

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService){
    const isDevelopmentEnvironment = config.get('NODE_ENV') !== Environment.Production;
    return {
      type: 'mysql',
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnvironment,
      logging: config.get('DB_LOGGING'),
      //entities: [Tuit]
    } as ConnectionOptions;
  }
});