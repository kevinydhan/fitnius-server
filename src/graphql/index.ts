import { buildSchema } from 'graphql'

import * as ExerciseSchemas from './schemas/Exercise'
import * as ExerciseResolvers from './resolvers/Exercise'

import * as MuscleGroupSchemas from './schemas/MuscleGroup'
import * as MuscleGroupResolvers from './resolvers/MuscleGroup'

export default {
    graphiql: process.env.NODE_ENV !== 'production',
    schema: buildSchema(`
    ${ExerciseSchemas.Type}

    ${MuscleGroupSchemas.Type}
    ${MuscleGroupSchemas.Input}

    type RootQuery {
        ${ExerciseSchemas.Queries}
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
    rootValue: {
        ...ExerciseResolvers,
        ...MuscleGroupResolvers
    }
}
