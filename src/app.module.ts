import { Module } from "@nestjs/common"

import * as process from "process"
import {SequelizeModule} from "@nestjs/sequelize"
import {ConfigModule} from "@nestjs/config"

import {UsersModule} from "./users/users.module"
import {RolesModule} from "./roles/roles.module"

import {User} from "./users/users.model"
import {Role} from "./roles/roles.model"


@Module({
  controllers: [],
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
      models: [User, Role],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule
  ]
})

export class AppModule {}
