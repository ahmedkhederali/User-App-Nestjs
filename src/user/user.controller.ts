import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserCreatedDTO } from './dto/user-created.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // private userService;
  // constructor(userService:UserService){
  //   this.userService=userService
  // }
  constructor(private readonly userService: UserService) {}
  // This Path For Know @Redirect
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post()
  store(@Req() req: Request) {
    console.log(req.body);
    return 'Ahmed';
  }

  @Get()
  getD() {
    return this.userService.getD();
  }
  @Get('/:id')
  getUserId(
    @Param('id', ParseIntPipe) id: number, // get data From Params){
  ) {
    return this.userService.getUserId(id);
  }
  //For Know some Option In Nestjs in Http Request
  @Post('/a*a')
  @HttpCode(201)
  @Header('Content-Type', 'application/json; charset=utf-8')
  store2(@Body() updatUserDto: UserCreatedDTO) {
    return this.userService.store2(updatUserDto);
  }

  @Post('/createuser')
  createuser(@Body() updatUserDto: UserCreatedDTO) {
    return this.userService.createUser(updatUserDto);
  }
  @Delete('/:id')
  deleteUserId(
    @Param('id', ParseIntPipe) id: number, // get data From Params){
  ) {
    return this.userService.deleteUserId(id);
  }
  
  @Patch('/:id')
  updatedUserId(
    @Body() updatUserDto: UserUpdateDto,
    @Param('id', ParseIntPipe) id: number, // get data From Params){
  ) {
    return this.userService.updatedUserId(id,updatUserDto);
  }
  // @Patch('/updateuser')
  // updateduser(@Body() updatUserDto: UserUpdateDto){
  //   return this.userService.updateUser(updatUserDto);

  // }

  
}
