import { Injectable } from "@nestjs/common"
import {RoleDto} from "./dto/role.dto"

import {InjectModel} from "@nestjs/sequelize"
import {Role} from "./roles.model"

@Injectable()
export class RolesService {

        constructor(@InjectModel(Role) private role: typeof Role) {}

        async createRole(dto: RoleDto) {
             const role = await this.role.create(dto)
             return role
        }

        async getAllRoles() {}

        async getRoleByValue(value: string) {
              const role = await this.role.findOne({where: {value}})
              return role
        }
}
