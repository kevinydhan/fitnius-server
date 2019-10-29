// =============================================================================
// GraphQL schemas
// =============================================================================

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

// =============================================================================
// Input types for GraphQL mutations
// =============================================================================

/**
 * Describes the input parameters for `createMuscleGroup` resolver function.
 */
export const CreateMuscleGroupInput = `
    input CreateMuscleGroupInput {
        name: String!
    }
`

/**
 * Describes the parameters for the `updateMuscleGroup` resolver function.
 */
export const UpdateMuscleGroupInput = `
    input UpdateMuscleGroupInput {
        id: ID!
        name: String
    }
`

/**
 * Describes the parameters for the `deleteMuscleGroup` resolver function.
 */
export const DeleteMuscleGroupInput = `
    input DeleteMuscleGroupInput {
        id: ID!
    }
`

// =============================================================================
// GraphQL resolvers
// =============================================================================

/**
 * Describes the GraphQL queries for the `MuscleGroup` instances.
 *
 * @query `getMuscleGroups`
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
    createMuscleGroup(input: CreateMuscleGroupInput): MuscleGroup!

    updateMuscleGroup(input: UpdateMuscleGroupInput): MuscleGroup!

    deleteMuscleGroup(input: DeleteMuscleGroupInput): DeleteResponse!
`
