import express from 'express'
import graphqlHttp from 'express-graphql'

import graphqlOptions from '../graphql/v1'
import { Exercise } from '../database/models/Exercise'
import { MuscleGroup } from '../database/models/MuscleGroup'
import { Equipment } from '../database/models/Equipment'

const app = express()

app.use(express.json())

app.use('/graphql', graphqlHttp(graphqlOptions))

app.get(
    '/',
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.send('hello world')
    }
)

app.get('/muscle-groups', async (req, res, next) => {
    try {
        const muscleGroups = await MuscleGroup.findAll({
            include: [Exercise]
        })
        res.json(muscleGroups)
    } catch (err) {
        next(err)
    }
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
