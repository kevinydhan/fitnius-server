import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { Unique, AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseMuscleGroup } from './joins/ExerciseMuscleGroup'

/**
 * @tableName `'muscleGroups'`
 * @fields - `name`: `string`
 *         - `exercises`: `Array<Exercise>`
 * @relationships - `ExerciseMuscleGroup`, *many-to-many*
 *
 * Creates a database table using `Sequelize`. A muscle group is an anatomical
 * section of the body. Some examples of instances of `MuscleGroup` are biceps,
 * lower back, and quadriceps.
 */
@Table({ tableName: 'muscleGroups' })
export class MuscleGroup extends Model<MuscleGroup> {
    /**
     * This field represents the name of the muscle group.
     */
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    /**
     * This field represents the array of `Exercise` instances associated to a
     * particular `MuscleGroup` instance.
     */
    @BelongsToMany(() => Exercise, () => ExerciseMuscleGroup)
    exercises!: Array<Exercise & { ExerciseMuscleGroup: ExerciseMuscleGroup }>
}
