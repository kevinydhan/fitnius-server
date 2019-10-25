import { Exercise } from '../../database/models/Exercise'

export const exercises = async () => {
    try {
        const exercises = await Exercise.findAll()
        return exercises
    } catch (err) {
        throw err
    }
}
