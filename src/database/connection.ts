import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_URL,
    storage: ':memory:',
    models: [__dirname + '/models'],
    logging: false
})

export default sequelize
