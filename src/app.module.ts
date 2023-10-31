import { Module } from "@nestjs/common"

import {SequelizeModule} from "@nestjs/sequelize"
import {ConfigModule} from "@nestjs/config"
import {UsersModule} from "./users/users.module"
import * as process from "process"


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
      models: [],
      autoLoadModels: true
    }),
    UsersModule
  ]
})
export class AppModule {}
