import { Table, Column, Model, DataType } from 'sequelize-typescript'
import { Unique, AllowNull } from 'sequelize-typescript'

@Table
export class Exercise extends Model<Exercise> {
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    @Column(DataType.FLOAT)
    rating!: Number

    @Column
    equipment!: string

    @Column
    level!: string
}
