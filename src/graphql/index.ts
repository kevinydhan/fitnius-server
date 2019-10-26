import { buildSchema } from 'graphql'

import * as ExerciseSchemas from './schemas/Exercise'
import * as ExerciseResolvers from './resolvers/Exercise'

import * as MuscleGroupSchemas from './schemas/MuscleGroupSchemas'
import * as MuscleGroupResolvers from './resolvers/MuscleGroupResolvers'

const DeleteResponse = `
    type DeleteResponse {
        status: Int!
        message: String
    }
`

export default {
    /**
     * Builds the GraphQL schema. This portion is where the schemas, queries,
     * and mutations are defined.
     */
    schema: buildSchema(`

    ${DeleteResponse}

    ${ExerciseSchemas.Type}

    ${MuscleGroupSchemas.Type}
    ${MuscleGroupSchemas.CreateMuscleGroupInput}
    ${MuscleGroupSchemas.UpdateMuscleGroupInput}
    ${MuscleGroupSchemas.DeleteMuscleGroupInput}

    type RootQuery {
        ${MuscleGroupSchemas.Queries}
    }

    type RootMutation {
        ${MuscleGroupSchemas.Mutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),

    /**
     * This is where the resolver functions for queries and mutations are. The
     * query/mutation name has to match the corresponding function's property
     * name.
     */
    rootValue: {
        ...MuscleGroupResolvers
    },

    /**
     * If true, a GraphQL interface is generated
     */
    graphiql: process.env.NODE_ENV !== 'production'
}
