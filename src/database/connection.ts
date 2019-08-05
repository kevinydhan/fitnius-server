import { Sequelize } from 'sequelize-typescript'

const ssl = process.env.NODE_ENV === 'production'

console.log('pls work')

const sequelize = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    database: process.env.DATABASE_URL || 'fitnius-db',
    storage: ':memory:',
    logging: false,
    dialectOptions: { ssl },
    models: [__dirname + '/models', __dirname + '/models' + '/joins']
})

export default sequelize
