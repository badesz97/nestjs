import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiResponseProperty,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from 'src/core/application-services/users.service';
import { User } from 'src/infrastructure/database/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@ApiTags('Cats')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Returns all users',
    type: User,
    isArray: true,
  })
  @ApiResponseProperty()
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Find user by id' })
  @ApiResponse({
    status: 200,
    description: 'Returns the the found user',
    type: User,
  })
  @ApiResponseProperty()
  @Get(':id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
  }

  @ApiOperation({ summary: 'Create user' })
  @UsePipes(ValidationPipe)
  @Post('create')
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
