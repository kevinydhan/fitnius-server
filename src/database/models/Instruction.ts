import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript'
import { AllowNull } from 'sequelize-typescript'

import { Exercise } from './Exercise'
import { ExerciseInstruction } from './joins/ExerciseInstruction'

@Table({ tableName: 'instructions' })
export class Instruction extends Model<Instruction> {
    @AllowNull(false)
    @Column
    description!: string

    @BelongsToMany(() => Exercise, () => ExerciseInstruction)
    exercises!: Array<Exercise & { ExerciseInstruction: ExerciseInstruction }>
}
