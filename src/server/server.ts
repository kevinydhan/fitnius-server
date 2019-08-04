import app from './app'
import connection from '../database/connection'

connection.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () =>
        console.log(`Server is running on port ${process.env.PORT}`)
    )
})
