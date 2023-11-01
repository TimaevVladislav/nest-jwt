import { Injectable } from "@nestjs/common"
import {RoleDto} from "./dto/role.dto"

import {InjectModel} from "@nestjs/sequelize"
import {Role} from "./roles.model"

@Injectable()
export class RoleService {

        constructor(@InjectModel(Role) private role: typeof Role) {}

        async createRole(dto: RoleDto) {
             const role = await this.role.create(dto)
             return role
        }

        async getAllRoles() {
            const roles = await this.role.findAll()
            return roles
        }

        async getRoleByValue(role: string) {
              const value = await this.role.findOne({where: {role}})
              return value
        }
}
