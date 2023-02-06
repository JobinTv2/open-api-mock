import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @ApiOkResponse({
    description: 'The user records',
    type: UserDto,
    isArray: true,
  })
  GetUsers() {
    return this.userService.getUsers();
  }
}
