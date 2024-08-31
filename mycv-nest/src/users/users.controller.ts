import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Serialize,
  SerializeInterceptor,
} from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.createUser(body.email, body.password);
  }

  @Serialize(UserDto)
  @Get('/:id')
  async findUser(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
  @Patch('/:id')
  updateUser(@Body() body: UpdateUserDto, @Param('id') id: number) {
    return this.usersService.update(id, { ...body });
  }
}
