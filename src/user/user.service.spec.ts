import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';
import * as users from './users.json';
jestOpenAPI(`D:/Training/Nest/open-api-mock/src/user/openapi.json`);

describe('GET /user', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get('http://localhost:3000/user');
    expect(res.status).toEqual(200);
    expect(res.data).toEqual(users);
    expect(res).toSatisfyApiSpec();
  });
});

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
