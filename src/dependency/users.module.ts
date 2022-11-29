import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/core/application-services/users.service';
import { User } from 'src/infrastructure/database/entities/user.entity';
import { UsersController } from 'src/web/controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
