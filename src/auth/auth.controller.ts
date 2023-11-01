import {Controller, Post} from "@nestjs/common"
import {CreateDto} from "../users/dto/create.dto"
import {AuthService} from "./auth.service"

@Controller("auth")
export class AuthController {

    constructor() {}

    @Post("/registration")
    registration(userDto: CreateDto) {

    }

    @Post("/login")
    login(userDto: CreateDto) {

    }

    @Post("/logout")
    logout() {

    }
}
