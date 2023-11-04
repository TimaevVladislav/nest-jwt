import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript"

import {User} from "../users/users.model"
import {UserRoles} from "../../relations/user.roles.model"

interface RoleCreationAttrs {
  role: string
  description: string
}

@Table({tableName: "roles"})

export class Role extends Model<Role, RoleCreationAttrs> {
   @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
   id: number

   @Column({type: DataType.STRING, unique: true, allowNull: false})
   role: string

   @Column({type: DataType.STRING, allowNull: false})
   description: string

   @BelongsToMany(() => User, () => UserRoles)
   users: User[]
}