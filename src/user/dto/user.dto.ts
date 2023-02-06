import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiProperty({ example: 'data' })
  id: number;

  @ApiProperty({ example: 'data' })
  name: string;

  @ApiProperty({ example: 'data' })
  username: string;

  @ApiProperty({ example: 'data' })
  email: string;

  @ApiProperty({ example: 'data' })
  phone: string;

  @ApiProperty({ example: 'data' })
  website: string;
}
