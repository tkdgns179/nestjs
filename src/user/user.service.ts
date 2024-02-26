import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/user-dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    public async findUserByUserName(userName: string) : Promise<User> {
        const user: User = await this.userRepository.createQueryBuilder()
        .select('user')
        .from(User, 'user')
        .where('user.name = :userName', {userName})
        .getOne()

        return user;
    }

    public async hasUserWithNamePassword(userName: string, userPasswd: string) : Promise<boolean> {

        const user = await this.findUserByUserName(userName)
        const isMatch = await bcrypt.compare(userPasswd, user.passwd);
        
        return isMatch;
    }

    public async saveUser(userDto: UserDto) {
        
        let user = new User();
        user.name = userDto.user_name;
        user.passwd = await bcrypt.hash(userDto.user_passwd, 1);
        user.phoneNumber = userDto.user_phoneNumber;
        user.email = userDto.user_email;
        
        await this.userRepository.save(user);
    }


}
