import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user-dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService : UserService) {}

    @Post('save')
    saveUser(@Body() UserDto : UserDto) : void {
        this.userService.saveUser(UserDto);
    }


}
