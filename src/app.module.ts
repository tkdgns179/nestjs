import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'; // Import join from the path module
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';

console.log(join(__dirname, '/**/*.entity.ts'))

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3400,
      username: 'root',
      password: '1234',
      database: 'test',
      synchronize: true,
      entities:[
        User,
        Product,
      ],
      autoLoadEntities:true,
      charset:'utf8mb4',
      logging:true, 
      keepConnectionAlive:true,

    })
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
