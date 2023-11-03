import {Controller, Post, Get, Body, UseGuards} from "@nestjs/common"
import {UsersService} from "./users.service"
import {CreateDto} from "./dto/create.dto"
import {AddRoleDto} from "../roles/dto/add.role.dto"

import {Roles} from "../decorators/role.auth.decorator"
import {RolesGuard} from "../guards/role.guard"

@Controller("users")

export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateDto) {
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
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
