import {Controller, Post, Get, Body} from "@nestjs/common"
import {UsersService} from "./users.service"
import {RegisterDto} from "./dto/register.dto"
import {ApiOperation} from "@nestjs/swagger";

@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    register(@Body() userDto: RegisterDto) {
      return this.usersService.register(userDto)
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
