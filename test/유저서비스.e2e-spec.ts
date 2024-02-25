import { Test } from "@nestjs/testing"
import { UserService } from "src/user/user.service"
import { UserDto } from "src/dto/user-dto"
import { Repository } from "typeorm"
import { User } from "src/entities/user.entity"
import { TypeOrmModule, getRepositoryToken } from "@nestjs/typeorm"
import { AppModule } from "src/app.module"

describe('유저 서비스 테스트', () => {
    let userService: UserService
    let userRepository: Repository<User>;
    let userDto: UserDto;

    let userRepositoryToken: string | Function = getRepositoryToken(User);
    

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports : [AppModule]
            ,
            providers: [
                UserService,
                {
                    provide: userRepositoryToken,
                    useClass: Repository
                }
            ]
        }).compile();

        userService = moduleRef.get<UserService>(UserService);
        userRepository = moduleRef.get<Repository<User>>(userRepositoryToken)
    })

    it('유저 저장', async () => {
        userDto = new UserDto("김상훈", "1234", "010-1231-1213", "hello@gmail.com");
        await userService.saveUser(userDto);
    })
    


})
