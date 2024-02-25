import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, isPhoneNumber, isString } from "class-validator";

@Exclude()
export class UserDto {
    
    constructor(user_name: string, user_passwd: string, 
        user_phoneNumber: string, user_email: string ) {
            this.user_name = user_name;
            this.user_passwd = user_passwd;
            this.user_phoneNumber = user_phoneNumber;
            this.user_email = user_email;
        }
    @Expose()
    @IsString()
    readonly user_name: string

    @Expose()
    @IsString()
    readonly user_passwd: string

    @Expose()
    @IsString()
    readonly user_phoneNumber: string

    @Expose()
    @IsEmail()
    readonly user_email: string


}