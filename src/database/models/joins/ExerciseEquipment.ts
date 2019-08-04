import { Table, Model, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { Equipment } from '../Equipment'

/**
 * Joins Exercise and Equipment table and creates a many-to-many relationship between the two tables.
 */
@Table({ tableName: 'exerciseEquipments' })
export class ExerciseEquipment extends Model<ExerciseEquipment> {
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    @ForeignKey(() => Equipment)
    equipmentId!: string | number
}
