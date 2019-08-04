import app from './app'
import connection from '../database/connection'

const PORT: number | string = process.env.PORT || 3000

connection.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
