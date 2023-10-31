import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/sequelize"
import {User} from "./users.model"
import {RegisterDto} from "./dto/register.dto"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async register(dto: RegisterDto) {
       const user = await this.userRepository.create(dto)
       return user
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userRepository.findAll()
        return users
    }
}
