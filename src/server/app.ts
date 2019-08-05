import express from 'express'
import graphqlHttp from 'express-graphql'
import { buildSchema } from 'graphql'

import { Exercise } from '../database/models/Exercise'
import { MuscleGroup } from '../database/models/MuscleGroup'
import { Equipment } from '../database/models/Equipment'

const app = express()

app.use(express.json())

app.use(
    '/graphql',
    graphqlHttp({
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
            exercises: [Exercise!]!
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
    })
)

app.get('/', (req: express.Request, res: express.Response, next) => {
    res.send('hello')
})

app.get('/exercises', async (req, res, next) => {
    try {
        const exercises = await Exercise.findAll({
            include: [MuscleGroup, Equipment]
        })
        res.json(exercises)
    } catch (err) {
        next(err)
    }
})

app.post('/exercises', async (req, res, next) => {
    try {
        const exercise = await Exercise.create(req.body)
        res.json(exercise)
    } catch (err) {
        next(err)
    }
})

app.post('/muscle-groups', async (req, res, next) => {
    try {
        const muscleGroup = await MuscleGroup.create(req.body)
        res.json(muscleGroup)
    } catch (err) {
        next(err)
    }
})

export default app
