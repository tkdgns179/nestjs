import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user-dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    public async saveUser(userDto: UserDto) {
        
        let user = new User();
        user.name = userDto.user_name;
        user.passwd = await bcrypt.hash(userDto.user_passwd, 1);
        user.phoneNumber = userDto.user_phoneNumber;
        user.email = userDto.user_email;
        
        await this.userRepository.save(user);
    }


}
