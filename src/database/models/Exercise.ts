import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript'

@Table
class Exercise extends Model<Exercise> {
    @Column
    name!: string

    @Column(DataType.FLOAT)
    rating!: Number

    @Column
    equipment!: string

    @Column
    level!: string
}

export default Exercise
