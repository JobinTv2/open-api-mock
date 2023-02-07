import { Injectable } from '@nestjs/common';
import * as Users from './users.json';
@Injectable()
export class UserService {
  getUsers() {
    return Users;
  }

  findById(id) {
    const result = Users.find((user) => user.id === Number(id));
    console.log(id, result);
    if (result) return result;
    return { Error: 'User not found' };
  }
}
