export const MuscleGroupSchema = `
type MuscleGroup {
    id: ID!
    name: String!
    exercises: [Exercise!]!
}
`

export const MuscleGroupInput = `
input MuscleGroupInput {
    name: String!
}
`
