import * as bcrypt from "bcryptjs"
import {HttpException, HttpStatus, Injectable} from "@nestjs/common"
import {UsersService} from "../users/users.service"
import {JwtService} from "@nestjs/jwt"
import {CreateDto} from "../users/dto/create.dto"
import {User} from "../users/users.model"

@Injectable()
export class AuthService {

    constructor(private users: UsersService, private jwt: JwtService) {}

    private async generateToken(user: User): Promise<{ token: string }> {
       const payload = {email: user.email, id: user.id, roles: user.roles}
       return { token: this.jwt.sign(payload) }
    }

    async registration(userDto: CreateDto): Promise<{ token: string }> {
       const candidate = await this.users.getUserByEmail(userDto.email)

       if (candidate) {
           throw new HttpException("User with this email already exists", HttpStatus.BAD_REQUEST)
       }

       const hashPassword = await bcrypt.hash(userDto.password, 10)
       const user = await this.users.createUserWithDefaultRole({...userDto, password: hashPassword})
       return this.generateToken(user)
    }

    async login() {

    }
}
