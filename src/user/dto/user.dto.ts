import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Glenna Reicher' })
  name: string;

  @ApiProperty({ example: 'Delphine' })
  username: string;

  @ApiProperty({ example: 'Chaim_McDermott@dana.io' })
  email: string;

  @ApiProperty({ example: '(775)976-6794 x41206' })
  phone: string;

  @ApiProperty({ example: 'conrad.com' })
  website: string;
}
