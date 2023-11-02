import {Controller, Post, Get, Body, UseGuards} from "@nestjs/common"
import {UsersService} from "./users.service"
import {CreateDto} from "./dto/create.dto"
import {JwtAuthGuard} from "../guards/auth.guard"

@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateDto) {
      return this.usersService.createUserWithDefaultRole(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
