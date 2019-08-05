import { Table, Model, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { MuscleGroup } from '../MuscleGroup'

/**
 * @tableName `'exerciseMuscleGroups'`
 * @fields - `exerciseId`: `uuid`
 *         - `muscleGroupId`: `uuid`
 * @relationships - `Exercise`, *many-to-many*
 *                - `MuscleGroup`, *many-to-many*
 *
 * Creates a database join table using `Sequelize`. `ExerciseMuscleGroup`
 * creates a many-to-many relationship between the `Exercise` and
 * `MuscleGroup`tables.
 */
@Table({ tableName: 'exerciseMuscleGroups' })
export class ExerciseMuscleGroup extends Model<ExerciseMuscleGroup> {
    /**
     * This field represents the `id` field for the `Exercise` instance
     * associated with the particular `MuscleGroup` instance.
     */
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    /**
     * This field represents the `id` field for the `MuscleGroup` instance
     * associated with the particular `Exercise` instance.
     */
    @ForeignKey(() => MuscleGroup)
    muscleGroupId!: string | number
}
