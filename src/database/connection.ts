import { Sequelize } from 'sequelize-typescript'

const ssl = process.env.NODE_ENV === 'production'

export const connection = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE_URL || 'fitnius-db',
    logging: false,
    dialectOptions: { ssl },
    models: [__dirname + '/models', __dirname + '/models' + '/joins']
})
