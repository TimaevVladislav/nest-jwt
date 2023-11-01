import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"
import {User} from "./users.model"
import {RegisterDto} from "./dto/register.dto"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private user: typeof User) {}

    async register(dto: RegisterDto) {
       const user = await this.user.create(dto)
       return user
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.user.findAll()
        return users
    }
}
