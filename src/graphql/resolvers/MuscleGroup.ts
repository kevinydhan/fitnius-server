import { MuscleGroup } from '../../database/models/MuscleGroup'
import { Exercise } from '../../database/models/Exercise'

/**
 * @name - `query muscleGroups`
 */
export const muscleGroups = async () => {
    try {
        const muscleGroups = await MuscleGroup.findAll({
            include: [Exercise]
        })
        return muscleGroups
    } catch (err) {
        throw err
    }
}

export const createMuscleGroup = async (args: any) => {
    const { input } = args
    try {
        const newMuscleGroup = await MuscleGroup.create(input)
        return newMuscleGroup
    } catch (err) {
        throw err
    }
}
