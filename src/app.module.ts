import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'; // Import join from the path module
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { ProductTagModule } from './product-tag/product-tag.module';
import { ProductTagController } from './product-tag/product-tag.controller';
import { ProductTagService } from './product-tag/product-tag.service';


@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath: `src/configs/env/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3400,
      username: process.env.MYSQL_USER_ID,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,
      entities:[
        User,
        Product,
      ],
      autoLoadEntities:true,
      charset:'utf8mb4',
      logging:true, 
      keepConnectionAlive:true,

    }),
    ProductModule,
    ProductTagModule
  ],
  controllers: [AppController, ProductTagController],
  providers: [AppService, ProductTagService],
})

export class AppModule {}
