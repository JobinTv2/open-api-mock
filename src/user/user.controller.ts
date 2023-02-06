import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { CreateCatDto } from './dto/mock.dto';
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
