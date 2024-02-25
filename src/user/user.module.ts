import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  imports : [TypeOrmModule.forFeature([User])],
  controllers : [UserController],
  exports: [UserService]
})
export class UserModule {
  
}
