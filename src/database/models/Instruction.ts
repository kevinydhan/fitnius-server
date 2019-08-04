import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseInstruction } from './joins/ExerciseInstruction'

/**
 * @tableName `'equipments'`
 * @fields - `name`: `string`
 *         - `exercises`: `Array<Exercise>`
 * @relationships - `ExerciseInstruction`, *many-to-many*
 *
 * Creates a database table using `Sequelize`. An instruction is a short
 * description on how to perform an exercise. An exercise will have a set of
 * instructions, so the instruction's description should be specific to a
 * particular moment in time.
 */
@Table({ tableName: 'instructions' })
export class Instruction extends Model<Instruction> {
    /**
     * This field represents the description of the instruction. The
     * description is a either one or a few sentences explaining how to perform
     * a particular exercise. An exercise will have a set of instructions, so
     * each `Instruction` instance should describe how to perform a movement at
     * specific moment in time.
     */
    @AllowNull(false)
    @Column
    description!: string

    /**
     * This field represents the array of `Exercise` instances associated to a
     * particular `Instruction` instance. Currently, this field is most likely
     * going to be unused but is needed because it can allow instructions to be
     * reused by multiple exercises.
     */
    @BelongsToMany(() => Exercise, () => ExerciseInstruction)
    exercises!: Array<Exercise>
}
