import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { Unique, AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseMuscleGroup } from './joins/ExerciseMuscleGroup'

@Table({ tableName: 'muscleGroups' })
export class MuscleGroup extends Model<MuscleGroup> {
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    @BelongsToMany(() => MuscleGroup, () => ExerciseMuscleGroup)
    exercises!: Array<Exercise & { ExerciseMuscleGroup: ExerciseMuscleGroup }>
}
