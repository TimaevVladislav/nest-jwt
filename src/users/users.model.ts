import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript"

import {Role} from "../roles/roles.model"
import {UserRoles} from "../relations/user.roles.model"

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({tableName: "users"})

export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
  id: number

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @Column({type: DataType.STRING, allowNull: false})
  password: string

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  blocked: boolean

  @Column({type: DataType.BOOLEAN, allowNull: true})
  reason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}