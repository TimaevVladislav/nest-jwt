import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import {User} from "../users/users.model"
import {Role} from "../roles/roles.model"

@Table({tableName: "user_roles"})

export class UserRoles extends Model<UserRoles> {
   @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
   id: number

   @ForeignKey(() => Role)
   @Column({type: DataType.INTEGER})
   roleId: string

   @ForeignKey(() => User)
   @Column({type: DataType.INTEGER})
   userId: string
}