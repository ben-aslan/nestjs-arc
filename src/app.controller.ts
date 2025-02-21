import { Controller, Get, Inject } from '@nestjs/common';
import IUserService from './services/abstract/iUserService';
import { Types } from 'mongoose';
import { delay } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly userService: IUserService) { }

  @Get()
  async getHello(): Promise<string> {
    await this.userService.addUser({ name: "sdf", _id: new Types.ObjectId(), __v: 0 })
    return 'success'
  }
}
