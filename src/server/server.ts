import app from './app'
import connection from '../database/connection'

const PORT = process.env.PORT || 3000

connection
    .sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    })
    .catch(err => console.log(err))
