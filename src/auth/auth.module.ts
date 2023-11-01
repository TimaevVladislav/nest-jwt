import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import {UsersModule} from "../users/users.module"
import {JwtModule} from "@nestjs/jwt"

@Module({
  providers: [AuthService],
  imports: [
      UsersModule,
      JwtModule.register({
          secret: process.env.API_SECRET_KEY,
          signOptions: {expiresIn: "24h"}
      })
  ]
})

export class AuthModule {}
