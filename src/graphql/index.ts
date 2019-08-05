import { buildSchema } from 'graphql'
import { MuscleGroup } from '../database/models/MuscleGroup'
export default {
    graphiql: true,
    schema: buildSchema(`
    type Exercise {
        id: ID!
        name: String!
        level: Int!
        rating: Int
        createdAt: String
        updatedAt: String
    }

    type MuscleGroup {
        id: ID!
        name: String!
        exercises: [Exercise!]
        createdAt: String
        updatedAt: String
    }

    input MuscleGroupInput {
        name: String!
    }

    type RootQuery {
        muscleGroups: [MuscleGroup!]!
    }

    schema {
        query: RootQuery
    }
    `),
    rootValue: {
        muscleGroups: async () => {
            try {
                const muscleGroups = await MuscleGroup.findAll()
                return muscleGroups
            } catch (err) {
                throw err
            }
        }
    }
}
