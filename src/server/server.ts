import app from './app'
import { sequelize } from '../database/connection'

const PORT = process.env.PORT || 3000
sequelize
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    })
    .catch(err => console.log(err))
