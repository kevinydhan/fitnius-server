import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { DataType, Unique, AllowNull } from 'sequelize-typescript'

import { MuscleGroup } from './MuscleGroup'
import { ExerciseMuscleGroup } from './joins/ExerciseMuscleGroup'

import { Equipment } from './Equipment'
import { ExerciseEquipment } from './joins/ExerciseEquipment'

import { Instruction } from './Instruction'
import { ExerciseInstruction } from './joins/ExerciseInstruction'

/**
 * @tableName `'exercises'`
 * @fields - `name`: `string`
 *         - `level`: `number`
 *         - `muscleGroups`: `Array<MuscleGroup>`
 *         - `equipments`: `Array<Equipment>`
 *         - `instructions`: `Array<Instruction>`
 * @relationships - `ExerciseMuscleGroup`, *many-to-many*
 *                - `ExerciseEquipment`, *many-to-many*
 *                - `ExerciseInstruction`, *many-to-many*
 *
 * Creates a database table using `Sequelize`. An exercise is a physical
 * movement, usually performed in repetitions, sets, and/or periods of time.
 */
@Table({ tableName: 'exercises' })
export class Exercise extends Model<Exercise> {
    /**
     * This field represents the name of the exercise.
     */
    @Unique
    @AllowNull(false)
    @Column
    name!: string

    /**
     * This field represents the rating of the exercise. This field is
     * auto-calculated by the database.
     */
    @Column(DataType.FLOAT)
    rating!: Number

    /**
     * This field represents the numerical value of the difficulty of the
     * exercise. Currently, the difficulty scale is between 1-3, where 1
     * represents a beginner-level exercise and 3 represents an expert-level
     * exercise.
     */
    @Column
    level!: number

    /**
     * This field represents the array of `MuscleGroup` instances associated to
     * a particular `Exercise` instance.
     */
    @BelongsToMany(() => MuscleGroup, () => ExerciseMuscleGroup)
    muscleGroups!: Array<
        MuscleGroup & { ExerciseMuscleGroup: ExerciseMuscleGroup }
    >

    /**
     * This field represents the array of `Equipment` instances associated to
     * a particular `Exercise` instance.
     */
    @BelongsToMany(() => Equipment, () => ExerciseEquipment)
    equipments!: Array<Equipment & { ExerciseEquipment: ExerciseEquipment }>

    /**
     * This field represents the array of `Instruction` instances associated to
     * a particular `Exercise` instance.
     */
    @BelongsToMany(() => Instruction, () => ExerciseInstruction)
    instructions!: Array<
        Instruction & { ExerciseInstruction: ExerciseInstruction }
    >
}
