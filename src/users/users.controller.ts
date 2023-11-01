import {Controller, Post, Get, Body} from "@nestjs/common"
import {UsersService} from "./users.service"
import {CreateDto} from "./dto/create.dto"

@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateDto) {
      return this.usersService.createUserWithDefaultRole(userDto)
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
