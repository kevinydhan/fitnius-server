import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { DataType, Unique, AllowNull } from 'sequelize-typescript'

import { MuscleGroup } from './MuscleGroup'
import { ExerciseMuscleGroup } from './joins/ExerciseMuscleGroup'

import { Equipment } from './Equipment'
import { ExerciseEquipment } from './joins/ExerciseEquipment'

@Table({ tableName: 'exercises' })
export class Exercise extends Model<Exercise> {
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    @Column(DataType.FLOAT)
    rating!: Number

    @Column
    level!: string

    @BelongsToMany(() => MuscleGroup, () => ExerciseMuscleGroup)
    muscleGroups!: Array<
        MuscleGroup & { ExerciseMuscleGroup: ExerciseMuscleGroup }
    >

    @BelongsToMany(() => Equipment, () => ExerciseEquipment)
    equipments!: Array<Equipment & { ExerciseEquipment: ExerciseEquipment }>
}
