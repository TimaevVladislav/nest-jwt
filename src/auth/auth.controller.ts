import {Body, Controller, Post} from "@nestjs/common"
import {CreateDto} from "../users/dto/create.dto"
import {AuthService} from "./auth.service"

@Controller("auth")
export class AuthController {

    constructor(private auth: AuthService) {}

    @Post("/registration")
    registration(@Body() userDto: CreateDto) {
        return this.auth.registration(userDto)
    }

    @Post("/login")
    login(@Body() userDto: CreateDto) {

    }

    @Post("/logout")
    logout() {

    }
}
