import express from 'express'
const app = express()

const { Exercise } = require('../database/models/Exercise')

app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.get('/exercises', async (req, res, next) => {
    try {
        const exercises = await Exercise.findAll()
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

export default app
