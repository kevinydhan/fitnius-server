import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
class Exercise extends Model<Exercise> {
    @Column
    name!: string
    rating!: Number
}
