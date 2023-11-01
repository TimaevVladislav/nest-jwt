import {Body, Controller, Get, Param, Post} from "@nestjs/common"
import {RoleService} from "./roles.service"
import {RoleDto} from "./dto/role.dto"

@Controller("roles")
export class RolesController {
    constructor(private roleService: RoleService) {}

    @Post()
    createRole(@Body() dto: RoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get()
    getRoles() {
        return this.roleService.getAllRoles()
    }

    @Get("/:role")
    getRoleByValue(@Param("role") role: string) {
        return this.roleService.getRoleByValue(role)
    }
}
