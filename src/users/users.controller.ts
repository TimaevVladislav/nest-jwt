import {Controller, Post, Get, Body, UseGuards, UsePipes, Delete} from "@nestjs/common"
import {UsersService} from "./users.service"

import {Roles} from "../../decorators/role.auth.decorator"
import {RolesGuard} from "../../guards/role.guard"
import {ValidationPipe} from "../../pipes/validation.pipe"

import {BanUserDto} from "./dto/ban.user.dto"
import {CreateUserDto} from "./dto/create.user.dto"
import {AddRoleDto} from "../roles/dto/add.role.dto"
import {RoleEnum} from "../../enums/role.enum"


@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @UsePipes(ValidationPipe)
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
      return this.usersService.createUserWithDefaultRole(userDto)
    }

    @Roles(RoleEnum.Admin)
    @UsePipes(ValidationPipe)
    @UseGuards(RolesGuard)
    @Post("/role")
    addUserRole(@Body() dto: AddRoleDto) {
        return this.usersService.addUserRole(dto)
    }

    @Roles(RoleEnum.Admin)
    @UseGuards(RolesGuard)
    @Post("/ban")
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto)
    }


    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Delete()
    deleteUser() {
        return this.usersService.deleteUser()
    }
}
