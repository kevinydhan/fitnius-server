import { Sequelize } from 'sequelize-typescript'

console.log()
console.log('=================================================================')
console.log('NODE_ENV =', process.env.NODE_ENV)
console.log('DATABASE_URL =', process.env.DATABASE_URL)
console.log('=================================================================')
console.log()

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_URL || 'fitnius-db',
    storage: ':memory:',
    models: [__dirname + '/models', __dirname + '/models' + '/joins'],
    logging: false
})

export default sequelize
