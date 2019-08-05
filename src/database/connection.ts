import { Sequelize } from 'sequelize-typescript'

// interface DatabaseCredentials {
//     username: string | undefined
//     password: string | undefined
//     database: string | undefined
// }

// const credentials: DatabaseCredentials = {
//     username: '',
//     password: '',
//     database: 'fitnius-db'
// }

// if (process.env.NODE_ENV === 'production') {
//     ;(credentials.username = process.env.DB_USER),
//         (credentials.password = process.env.DB_PASSWORD),
//         (credentials.database = process.env.DATABASE_URL)
// }

const sequelize = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE_URL || 'fitnius-db',
    storage: ':memory:',
    models: [__dirname + '/models', __dirname + '/models' + '/joins'],
    logging: false
})

export default sequelize
