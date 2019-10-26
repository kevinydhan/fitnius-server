/**
 * Describes the GraphQL schema for a `Exercise` instance.
 */
export const Type = `
    type Exercise {
        id: ID!
        name: String!
        level: Int
        rating: Int
        muscleGroups: [MuscleGroup!]
        createdAt: String
        updatedAt: String
    }
`

export const Queries = `
    exercises: [Exercise!]!
`
