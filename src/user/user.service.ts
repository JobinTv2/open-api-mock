import { Injectable } from '@nestjs/common';
import * as Users from './users.json';
@Injectable()
export class UserService {
  getUsers() {
    return Users;
  }
}
