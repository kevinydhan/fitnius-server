/**
 * Describes the GraphQL schema for a `MuscleGroup` instance.
 */
export const Type = `
    type MuscleGroup {
        id: ID!
        name: String!
        exercises: [Exercise!]
        createdAt: String
        updatedAt: String
    }
`

/**
 * Describes the GraphQL schema for the input parameters for
 * `createMuscleGroup`.
 */
export const Input = `
    input MuscleGroupInput {
        name: String!
    }
`

/**
 * Describes the GraphQL queries for the `MuscleGroup` instances.
 */
export const Queries = `
    muscleGroups: [MuscleGroup!]!
`

/**
 * Describes the GraphQL mutations for the `MuscleGroup` instances.
 *
 * @mutation `createMuscleGroup`
 * @mutation `updateMuscleGroup`
 * @mutation `deleteMuscleGroup`
 */
export const Mutations = `
    createMuscleGroup(input: MuscleGroupInput): MuscleGroup!
`
