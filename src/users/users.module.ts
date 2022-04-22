import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersController } from "./users.controller";
import UsersService from "./users.service";

@Module({
  exports: [],
  controllers: [
    UsersController
  ],
  providers: [
    UsersService,
    PrismaService
  ]
})
export default class UsersModule{

}