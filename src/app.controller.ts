/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entity/user-entity';
import { Repository } from 'typeorm';

@Controller('users')
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) { }

  @Post()
  postUser() {
    return this.userRepository.save({})
  }

  @Get()
  async getUsers() {
    return this.userRepository.find()
  }

  @Patch(':id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id: parseInt(id)
      }
    })

    return this.userRepository.save({
      ...user,
      title: user.title + '0'
    })
  }
}
