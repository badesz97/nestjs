import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    example: 1,
    description: 'The ID of the user',
  })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @ApiProperty({
    description: 'The username of the user',
    example: 'user',
  })
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'user@user.com',
  })
  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
