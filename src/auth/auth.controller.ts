import { Body, Controller, Get, Post,Request,UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
@Controller('auth')
export class AuthController  {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard) 
  @Post('/login')
  //this way iam handle every thing from A to Z 

  // async validateorUser(@Body() loginDto:any) {
  //   return this.authService.validateorUser(loginDto.email,loginDto.password);
  // }

  // You Can Use This Way in Passport To Handle Login Function
  async validateorUser(@Request() req) {
    return this.authService.login(req.user)
  }

 
}
