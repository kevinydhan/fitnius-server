import { Sequelize } from 'sequelize-typescript'

const ssl = process.env.NODE_ENV === 'production'

console.log('DATABASE_URL =', process.env.DATABASE_URL)

export const connection = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    database: process.env.DATABASE_URL || 'fitnius-db',
    logging: false,
    dialectOptions: { ssl },
    models: [__dirname + '/models', __dirname + '/models' + '/joins']
})
