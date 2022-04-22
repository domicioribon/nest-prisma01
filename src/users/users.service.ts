import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class UsersService{
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any>{
    return await this.prisma.user.findMany();
  }

  create(body: any){
    return {
      success: true,
      body
    }
  }
}