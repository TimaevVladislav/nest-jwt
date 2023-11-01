import {Body, Controller, Get, Param, Post} from "@nestjs/common"
import {RolesService} from "./roles.service"
import {RoleDto} from "./dto/role.dto"

@Controller("roles")
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    createRole(@Body dto: RoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get()
    getRoles() {}

    @Get("/:role")
    getRoleByValue(@Param("role") role: string) {
        return this.roleService.getRoleByValue(role)
    }
}
