import { Body, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    // dependancy Injection 
    // but we are in diffrent Module so in module auth we didn't know userService so 
    // we must make an export of user Service and import it in auth module
    constructor(
        private jwtService: JwtService,
        private userService:UserService){}

    async validateorUser (email:string , password:string){
      
        const user =await this.userService.findByEmail(email)
        if(user && user.password === password){
            return  user
        }
        return null
     
        
    }
    async login(user: any) {
        console.log(user)
        const payload = { email: user.email, sub: user.userId };
        return {
            user,
          access_token: this.jwtService.sign(payload),
        };
      }
}
