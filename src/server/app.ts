import express from 'express'
import graphqlHttp from 'express-graphql'

import GraphQLOptions from '../graphql'

const app = express()

app.use(express.json())

app.use('/graphql', graphqlHttp(GraphQLOptions))

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

export default app
