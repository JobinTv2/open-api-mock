import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import jestOpenAPI from 'jest-openapi';
import axios from 'axios';
import openApiJson from './openapi.json';

jestOpenAPI(`D:/Training/Nest/open-api-mock/src/user/openapi.json`);

describe('GET /user', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Get an HTTP response from your server (e.g. using axios)
    const res = await axios.get('http://localhost:3000/user');

    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
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
