import { BadGatewayException, BadRequestException, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Post, Put, Res, UseInterceptors } from '@nestjs/common';
import IUserService from './services/abstract/iUserService';
import { Types } from 'mongoose';
import { delay } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly userService: IUserService) { }

  @Get()
  async getUser() {
    return {
      success: true,
      data: await this.userService.getUser({ name: "sdf" })
    }
  }

  @Post()
  async addUser() {
    await this.userService.addUser({ name: "sdf", _id: new Types.ObjectId(),password:'pass', __v: 0 })
    return {
      success: true
    }
  }

  @Put()
  async updateUser() {
    await this.userService.updateUser({ name: "sdf" }, { $set: { name: "sdf" } })
    return {
      success: true
    }
  }

  @Delete()
  async deleteUser() {
    await this.userService.deleteUser({ name: "sdf" })
  }
}
