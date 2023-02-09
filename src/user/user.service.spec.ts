import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';
import * as users from './users.json';
import * as openAPISJson from './openapi.json';
jestOpenAPI(`D:/Works/Training/Nest/open-api-mock/src/user/openapi.json`);

console.log(openAPISJson, 'json   ');

Object.entries(openAPISJson.paths).map((item) => {
  describe('GET /user', () => {
    it('should satisfy OpenAPI spec', async () => {
      let path = `http://localhost:3000${item[0]}`;
      if (path.includes(`{id}`)) path = path.replace('{id}', '1');
      console.log(path, 'path');
      const res = await axios.get(path);
      expect(res.status).toEqual(200);
      if (path === 'http://localhost:3000/user')
        expect(res.data).toEqual(users);
      else if (path === 'http://localhost:3000/user/1') {
        const user = users.find((usr) => usr.id === Number(1));
        expect(res.data).toEqual(user);
      }
      expect(res).toSatisfyApiSpec();
    });
  });
});

describe('GET /user', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get('http://localhost:3000/user');
    expect(res.status).toEqual(200);
    expect(res.data).toEqual(users);
    expect(res).toSatisfyApiSpec();
  });
});

describe('GET /user/{id}', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get('http://localhost:3000/user/1');
    expect(res.status).toEqual(200);
    const user = users.find((usr) => usr.id === Number(1));
    expect(res.data).toEqual(user);
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
