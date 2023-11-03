import {Controller, Post, Get, Body, UseGuards} from "@nestjs/common"
import {UsersService} from "./users.service"

import {Roles} from "../decorators/role.auth.decorator"
import {RolesGuard} from "../guards/role.guard"

import {BanUserDto} from "./dto/ban.user.dto"
import {CreateUserDto} from "./dto/create.user.dto"
import {AddRoleDto} from "../roles/dto/add.role.dto"


@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
      return this.usersService.createUserWithDefaultRole(userDto)
    }

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post("/role")
    addUserRole(@Body() dto: AddRoleDto) {
        return this.usersService.addUserRole(dto)
    }

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post("/ban")
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto)
    }

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
