import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { DataType, Unique, AllowNull } from 'sequelize-typescript'

import { MuscleGroup } from './MuscleGroup'
import { ExerciseMuscleGroup } from './joins/ExerciseMuscleGroup'

@Table({ tableName: 'exercises' })
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

    @BelongsToMany(() => MuscleGroup, () => ExerciseMuscleGroup)
    muscleGroups!: Array<
        MuscleGroup & { ExerciseMuscleGroup: ExerciseMuscleGroup }
    >
}
