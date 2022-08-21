import { IsAlpha, IsEmail, IsNotEmpty ,IsString} from "class-validator";

export class UserUpdateDto{
    @IsNotEmpty() @IsAlpha()
    name:string;
    @IsEmail()
    email:string
    @IsNotEmpty() @IsString()
    password: string;
}