import { Table, Model, Column, ForeignKey } from 'sequelize-typescript'

import { Exercise } from '../Exercise'
import { Instruction } from '../Instruction'

/**
 * @tableName`'exerciseInstructions'`
 * @fields - `order`: `number`
 *         - `exerciseId`: `uuid`
 *         - `instructionId`: `uuid`
 * @relationships - `Exercise`, *many-to-many*
 *                - `Instruction`, *many-to-many*
 *
 * Creates a database join table using `Sequelize`. `ExerciseInstruction`
 * creates a many-to-many relationship between the `Exercise` and
 * `Instruction` tables.
 */
@Table({ tableName: 'exerciseInstructions' })
export class ExerciseInstruction extends Model<ExerciseInstruction> {
    /**
     * This field represents the order in which the exercise's instruction
     * should be executed. For example, if the current instruction should be
     * executed first, the value for the field `order` should be `1`.
     */
    @Column
    order!: number

    /**
     * This field represents the `id` field for the `Exercise` instance
     * associated with the particular `Instruction` instance.
     */
    @ForeignKey(() => Exercise)
    exerciseId!: string | number

    /**
     * This field represents the `id` field for the `Instruction` instance
     * associated with the particular `Exercise` instance.
     */
    @ForeignKey(() => Instruction)
    instructionId!: string | number
}
