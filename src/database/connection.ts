import { Sequelize } from 'sequelize-typescript'

const ssl = process.env.NODE_ENV === 'production'

console.log('DB_HOST =', process.env.DB_HOST)
console.log('DB_USER =', process.env.DB_USER)
console.log('DB_PASSWORD =', process.env.DB_PASSWORD)

export const connection = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    host: process.env.DB_HOST || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE_URL || 'fitnius-db',
    logging: false,
    dialectOptions: { ssl },
    models: [__dirname + '/models', __dirname + '/models' + '/joins']
})
