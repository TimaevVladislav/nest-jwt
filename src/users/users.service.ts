import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"
import {User} from "./users.model"
import {CreateDto} from "./dto/create.dto"
import {RoleService} from "../roles/roles.service"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private user: typeof User, private roleService: RoleService) {}

    async createUserWithDefaultRole(dto: CreateDto) {
       const user = await this.user.create(dto)
       const role = await this.roleService.getRoleByValue("User")
       await user.$set("roles", [role.id])
       user.roles = [role]

       return user
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.user.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.user.findOne({where: {email}, include: {all: true}})
        return user
    }
}
