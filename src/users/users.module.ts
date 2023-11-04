import {forwardRef, Module} from "@nestjs/common"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import {SequelizeModule} from "@nestjs/sequelize"

import {RolesModule} from "../roles/roles.module"
import {AuthModule} from "../auth/auth.module"
import {Post} from "../posts/posts.model"
import {User} from "./users.model"
import {Role} from "../roles/roles.model"
import {UserRoles} from "../../relations/user.roles.model"


@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles, Post]),
      forwardRef(() => AuthModule),
      RolesModule
  ],
  exports: [
      UsersService
  ]
})

export class UsersModule {}
