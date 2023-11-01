import { Module } from "@nestjs/common"
import { RoleService } from "./roles.service"
import { RolesController } from "./roles.controller"
import {SequelizeModule} from "@nestjs/sequelize"

import {Role} from "./roles.model"
import {User} from "../users/users.model"
import {UserRoles} from "../relations/user.roles.model"

@Module({
  providers: [RoleService],
  controllers: [RolesController],
  imports: [
      SequelizeModule.forFeature([Role, User, UserRoles])
  ]
})

export class RolesModule {}
