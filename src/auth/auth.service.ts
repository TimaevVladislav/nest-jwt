import { Injectable } from "@nestjs/common"
import {UsersService} from "../users/users.service"
import {JwtService} from "@nestjs/jwt"
import {CreateDto} from "../users/dto/create.dto";

@Injectable()
export class AuthService {

    constructor(private users: UsersService, private jwt: JwtService) {}

    async registration(userDto: CreateDto) {
       const candidate = await this.users.getUserByEmail(userDto.email)

    }

    async login() {

    }
}
