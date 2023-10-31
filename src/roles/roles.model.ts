import {Column, DataType, Model, Table} from "sequelize-typescript"

interface RoleCreationAttrs {
  role: string
  description: string
}

@Table({tableName: "roles"})

export class Roles extends Model<Roles, RoleCreationAttrs> {

}