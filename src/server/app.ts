import express from 'express'

const app = express()

import { Exercise } from '../database/models/Exercise'
import { MuscleGroup } from '../database/models/MuscleGroup'
import { Equipment } from '../database/models/Equipment'

app.use(express.json())

app.get('/', (req, res, next) => {
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
