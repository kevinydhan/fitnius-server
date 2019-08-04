import { Sequelize } from 'sequelize-typescript'

console.log(process.env.DATABASE_URL)

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_URL || 'fitnius-db',
    storage: ':memory:',
    models: [__dirname + '/models', __dirname + '/models' + '/joins'],
    logging: false
})

export default sequelize
