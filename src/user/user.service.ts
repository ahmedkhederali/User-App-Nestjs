import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
// get User Using ID OF User
  getUserId(
    params, // get data From Params){
  ) {
    return this.usersRepository.findOne({ where: { id: params } });
  }
  //delete user By ID
  deleteUserId(
    params, // get data From Params){
  ) {
    return this.usersRepository.delete(params);
  }
  //updated By User ID
  updatedUserId(
    params, // get data From Params){
    updatUserDto,
  ) {
    return this.usersRepository.update(params, updatUserDto);
  }
  // This A test Case 
  store2(updatUserDto) {
    return updatUserDto;
  }
  // This Function To Create New User And Save It In DB
  createUser(updatUserDto) {
    return this.usersRepository.save(updatUserDto);
  }
  // return user Array
  getD(): Promise<User[]> {
    return this.usersRepository.find();
  }
  // Find By Email User
  findByEmail(email:string){
    return this.usersRepository.findOne({where:{email}})
  } 
}
