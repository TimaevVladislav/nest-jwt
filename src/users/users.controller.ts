import {Controller, Post, Get, Body} from "@nestjs/common"
import {UsersService} from "./users.service"
import {CreateDto} from "./dto/create.dto"

@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateDto) {
      const user = this.usersService.createUserWithDefaultRole(userDto)
      return user
    }

    @Get()
    getAllUsers() {
        const users = this.usersService.getAllUsers()
        return users
    }
}
