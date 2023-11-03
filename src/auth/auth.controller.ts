import {Body, Controller, Post} from "@nestjs/common"
import {CreateUserDto} from "../users/dto/create.user.dto"
import {AuthService} from "./auth.service"

@Controller("auth")
export class AuthController {

    constructor(private auth: AuthService) {}

    @Post("/registration")
    registration(@Body() userDto: CreateUserDto) {
        return this.auth.registration(userDto)
    }

    @Post("/login")
    login(@Body() userDto: CreateUserDto) {
        return this.auth.login(userDto)
    }

    @Post("/logout")
    logout() {

    }
}
