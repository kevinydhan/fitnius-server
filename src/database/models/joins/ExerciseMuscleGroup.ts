import { Table, Model, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { MuscleGroup } from '../MuscleGroup'

/**
 * Joins `Exercise` and `MuscleGroup` tables and creates a many-to-many relationship between the two tables.
 */
@Table({ tableName: 'exerciseMuscleGroups' })
export class ExerciseMuscleGroup extends Model<ExerciseMuscleGroup> {
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    @ForeignKey(() => MuscleGroup)
    muscleGroupId!: string | number
}
