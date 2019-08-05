import { Sequelize } from 'sequelize-typescript'

interface DatabaseCredentials {
    username: string | undefined
    password: string | undefined
    database: string | undefined
}

const credentials: DatabaseCredentials = {
    username: '',
    password: '',
    database: 'fitnius-db'
}

console.log()
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log()

if (process.env.NODE_ENV === 'production') {
    ;(credentials.username = process.env.DB_USER),
        (credentials.password = process.env.DB_PASSWORD),
        (credentials.database = process.env.DATABASE_URL)
}

const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: ':memory:',
    models: [__dirname + '/models', __dirname + '/models' + '/joins'],
    logging: false,
    ...credentials
})

export default sequelize
