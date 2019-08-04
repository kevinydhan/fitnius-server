import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { Unique, AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseEquipment } from './joins/ExerciseEquipment'

/**
 * @tableName `'equipments'`
 * @fields - `name`: `string`
 *         - `exercises`: `Array<Exercise>`
 * @relationships - `ExerciseEquipment`, *many-to-many*
 *
 * Creates a database table using `Sequelize`. An equipment is anything that is
 * used to perform an exercise.
 */
@Table({ tableName: 'equipments' })
export class Equipment extends Model<Equipment> {
    /**
     * This field represents the name of the equipment.
     */
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    /**
     * This field represents the array of `Exercise` instances associated to a
     * particular `Equipment` instance.
     */
    @BelongsToMany(() => Exercise, () => ExerciseEquipment)
    exercises!: Array<Exercise>
}
