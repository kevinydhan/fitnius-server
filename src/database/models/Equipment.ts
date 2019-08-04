import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { Unique, AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseEquipment } from './joins/ExerciseEquipment'

@Table({ tableName: 'equipments' })
export class Equipment extends Model<Equipment> {
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    @BelongsToMany(() => Exercise, () => ExerciseEquipment)
    exercises!: Array<Exercise & { ExerciseEquipment: ExerciseEquipment }>
}
