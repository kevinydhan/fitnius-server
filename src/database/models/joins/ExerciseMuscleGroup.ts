import { Table, Model, Column, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { MuscleGroup } from '../MuscleGroup'

/**
 * Joins Exercise table and MuscleGroup table.
 */
@Table({ tableName: 'exerciseMuscleGroups' })
export class ExerciseMuscleGroup extends Model<ExerciseMuscleGroup> {
    @ForeignKey(() => Exercise)
    @Column
    exerciseId!: number

    @ForeignKey(() => MuscleGroup)
    @Column
    muscleGroupId!: number
}
