import { IsAlpha, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCreatedDTO{
    @IsEmail()
    email:string;
    @IsNotEmpty() @IsString()
    password: string;
    @IsAlpha()
    name:string
}