import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_URL || 'postgres://localhost/fitnius-db',
    storage: ':memory:',
    models: [__dirname + '/models', __dirname + '/models' + '/joins'],
    logging: false
})

export default sequelize
