import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript"
import {User} from "../users/users.model"

interface RoleCreationAttrs {
  role: string
  description: string
}

@Table({tableName: "roles"})

export class Roles extends Model<Roles, RoleCreationAttrs> {
   @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
   id: number

   @Column({type: DataType.STRING, unique: true, allowNull: false})
   role: string

   @Column({type: DataType.STRING, allowNull: false})
   description: string

   @BelongsToMany(() => User, () => UserRoles)
   users: User[]
}