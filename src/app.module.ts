import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'; // Import join from the path module
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductTagModule } from './product-tag/product-tag.module';
import { ProductTag } from './entities/product-tag.entity';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConnectionIp } from './entities/connection-ip.entity';


@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath: `src/configs/env/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER_ID,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: false, // false가 안전
      entities:[
        User,
        Product,
        ProductTag,
        ConnectionIp
      ],
      autoLoadEntities:true,
      charset:'utf8mb4',
      logging:true, 
      keepConnectionAlive:true,
      ssl: {
        ca: process.env.MYSQL_SSL_CERT,
      },
      
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
