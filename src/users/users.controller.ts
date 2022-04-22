import { Body, Controller, Get, HttpCode, Param, Post, Headers, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/comuns/http-exception.filter';
import { JoiValidationPipe } from 'src/comuns/joi-validation.pipe';
import { LoggingInterceptor } from 'src/comuns/logging.interceptor';
import { Roles } from 'src/comuns/roles.decorator';
import { RolesGuard } from 'src/comuns/roles.guard';
import { ValidationPipe } from 'src/comuns/validation.pipe';
import UserCreateDTO from './user-create.dto';
import UsersService from './users.service';

@Controller('users')
// @UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Get(':id')
  // @Roles('adminn','outraregra')
  // @UseGuards(RolesGuard)
  // @UseInterceptors(LoggingInterceptor)
  findByID(@Param('id') id: number){
    return id;
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Post()
  create(@Body(new ValidationPipe()) body: UserCreateDTO) {
    return this.userService.create(body);
  }




}
