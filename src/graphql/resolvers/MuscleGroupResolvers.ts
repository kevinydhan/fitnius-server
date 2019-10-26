import { MuscleGroup } from '../../database/models/MuscleGroup'
import { Exercise } from '../../database/models/Exercise'

// =============================================================================
// Get MuscleGroups
// =============================================================================

/**
 * @name - `query muscleGroups`
 */
export const getMuscleGroups = async () => {
    try {
        const muscleGroups = await MuscleGroup.findAll({
            include: [Exercise]
        })
        return muscleGroups
    } catch (err) {
        throw err
    }
}

// =============================================================================
// Create MuscleGroup instance
// =============================================================================

/**
 * This interface describes the input from the user when the user is attempting
 * to create a new `MuscleGroup` instance.
 */
export interface CreateMuscleGroupInput {
    name: string
}

/**
 * This interface describes the parameters for the `createMuscleGroup` resolver.
 */
export interface CreateMuscleGroupResolverParameters {
    input: CreateMuscleGroupInput
}

/**
 * This GraphQL resolver creates a new `MuscleGroup` instance.
 *
 * @param {CreateMuscleGroupInput} args.input - Values from the user
 *
 */
export const createMuscleGroup = async (
    args: CreateMuscleGroupResolverParameters
) => {
    const { input } = args

    try {
        const newMuscleGroup = await MuscleGroup.create(input)
        return newMuscleGroup
    } catch (err) {
        throw err
    }
}

// =============================================================================
// Update MuscleGroup instance
// =============================================================================

/**
 * **TODO**
 * - Handle error where updated value overlaps with existing instances
 *   ex. updated field = `{ name: "Quadriceps" }`
 *       existing instance = `{ name: "Quadriceps" }`
 *
 *
 * - Handle error where no instance with given id is found
 *
 *
 * - Handle case where character limit exceeds a certain limit
 *   Note: this might need to be handled higher up in the pipeline
 *
 *
 * - Handle case where updated field is an empty string
 *   Note: this might need to be handled higher up in the pipeline
 */

/**
 * This interface describes the input from the user when the user is attempting
 * to update a `MuscleGroup` instance.
 */
export interface UpdateMuscleGroupInput {
    readonly id: number | string
    name?: string
}

/**
 * This interface describes the parameters for the `updateMuscleGroup` resolver.
 */
export interface UpdateMuscleGroupResolverParameters {
    input: UpdateMuscleGroupInput
}

/**
 * This GraphQL resolver updates a MuscleGroup instance with the provided
 * values.
 *
 * @param {UpdateMuscleGroupInput} args.input - Updated values from the user`
 */
export const updateMuscleGroup = async (
    args: UpdateMuscleGroupResolverParameters
) => {
    const { id, ...updatedValues } = args.input

    try {
        /**
         * Attempts to find the muscle group with the given id
         */
        const muscleGroup = await MuscleGroup.findByPk(id)

        /**
         * If `null`, throw a new error with the message stating that an
         * instance with the given id was not found.
         *
         * Else, update the instance with the given values from the user and
         * return the updated instance.
         */
        if (!muscleGroup)
            throw new Error('Cannot find muscle group with given id')
        else {
            const updatedMuscleGroup = await muscleGroup.update(updatedValues)
            return updatedMuscleGroup
        }
    } catch (err) {
        throw err
    }
}

// =============================================================================
// Delete MuscleGroup instance
// =============================================================================

/**
 * This interface describes the input from the user when the user is attempting
 * to delete a `MuscleGroup` instance.
 */
export interface DeleteMuscleGroupInput {
    readonly id: number | string
}

/**
 * This interface describes the parameters for the `deleteMuscleGroup` resolver.
 */
export interface DeleteMuscleGroupResolverParameters {
    input: DeleteMuscleGroupInput
}

/**
 * This GraphQL resolver deletes the `MuscleGroup` instance with the given id.
 */
export const deleteMuscleGroup = async (
    args: DeleteMuscleGroupResolverParameters
) => {
    const { id } = args.input

    try {
        const muscleGroup = await MuscleGroup.destroy({ where: { id } })
        console.log(muscleGroup)

        return { status: 204, message: 'Instance was successfully deleted.' }
    } catch (err) {
        throw err
    }
}
