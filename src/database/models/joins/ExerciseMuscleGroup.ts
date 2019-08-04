import { Table, Model, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { MuscleGroup } from '../MuscleGroup'

/**
 * Joins Exercise table and MuscleGroup table.
 */
@Table({ tableName: 'exerciseMuscleGroups' })
export class ExerciseMuscleGroup extends Model<ExerciseMuscleGroup> {
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    @ForeignKey(() => MuscleGroup)
    muscleGroupId!: string | number
}
