import { Module } from "@nestjs/common"

import * as process from "process"
import {SequelizeModule} from "@nestjs/sequelize"
import {ConfigModule} from "@nestjs/config"

import {UsersModule} from "./users/users.module"
import {RolesModule} from "./roles/roles.module"
import {FilesModule} from "./files/files.module"
import {AuthModule} from "./auth/auth.module"
import {PostsModule} from "./posts/posts.module"


import {AuthController} from "./auth/auth.controller"
import {PostsController} from './posts/posts.controller'

import {Post} from "./posts/posts.model"
import {User} from "./users/users.model"
import {Role} from "./roles/roles.model"
import {UserRoles} from "../relations/user.roles.model"

@Module({
  controllers: [AuthController, PostsController],
  providers: [],
  imports: [
    ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [User, Post, Role, UserRoles],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule
  ]
})

export class AppModule {}
