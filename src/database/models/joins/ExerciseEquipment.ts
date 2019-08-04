import { Table, Model, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { Equipment } from '../Equipment'

/**
 * @tableName`'exerciseEquipments'`
 * @fields - `exerciseId`: `uuid`
 *         - `equipmentId`: `uuid`
 * @relationships - `Exercise`, *many-to-many*
 *                - `Equipment`, *many-to-many*
 *
 * Creates a database join table using `Sequelize`. `ExerciseEquipment` creates
 * a many-to-many relationship between the `Exercise` and `Equipment`tables.
 */
@Table({ tableName: 'exerciseEquipments' })
export class ExerciseEquipment extends Model<ExerciseEquipment> {
    /**
     * This field represents the `id` field for the `Exercise` instance
     * associated with the particular `Equipment` instance.
     */
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    /**
     * This field represents the `id` field for the `Equipment` instance
     * associated with the particular `Exercise` instance.
     */
    @ForeignKey(() => Equipment)
    equipmentId!: string | number
}
