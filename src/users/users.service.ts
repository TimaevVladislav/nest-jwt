import {HttpException, HttpStatus, Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"
import {User} from "./users.model"
import {RoleService} from "../roles/roles.service"

import {CreateUserDto} from "./dto/create.user.dto"
import {BanUserDto} from "./dto/ban.user.dto"
import {AddRoleDto} from "../roles/dto/add.role.dto"
import {RoleEnum} from "../../enums/role.enum"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private user: typeof User, private roleService: RoleService) {}

    async createUserWithDefaultRole(dto: CreateUserDto) {
       const user = await this.user.create(dto)
       const role = await this.roleService.getRoleByValue(RoleEnum.User)
       await user.$set("roles", [role.id])
       user.roles = [role]

       return user
    }

    async addUserRole(dto: AddRoleDto) {
        const user = await this.user.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.role)

        if (role && user) {
            await user.$add("role", role.id)
            return dto
        }

        throw new HttpException("User or role not found", HttpStatus.NOT_FOUND)
    }

    async banUser(dto: BanUserDto): Promise<User> {
        const user = await this.user.findByPk(dto.userId)

        if (!user) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND)
        }

        user.blocked = true
        user.reason = dto.reason
        return await user.save()
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.user.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.user.findOne({where: {email}, include: {all: true}})
        return user
    }

    async deleteUser() {

    }
}
