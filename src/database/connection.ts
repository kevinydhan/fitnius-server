import { Sequelize } from 'sequelize-typescript'
import parseDatabaseUrl from '../utils/parse-database-url'

/**
 * This interface represents the options passed to Sequelize in a development
 * environment.
 */
interface SequelizeOptionsDevelopment {
    database: string | undefined
}

/**
 * This interface represents the options passed to Sequelize in a production
 * environment.
 */
interface SequelizeOptionsProduction {
    host: string | undefined
    database: string | undefined
    username: string | undefined
    password: string | undefined
    dialectOptions: { ssl: boolean }
}

const optionsDevelopment: SequelizeOptionsDevelopment = {
    database: process.env.DB_NAME
}

const options =
    process.env.NODE_ENV === 'production'
        ? {
              ...parseDatabaseUrl(process.env.DATABASE_URL),
              dialectOptions: { ssl: true }
          }
        : optionsDevelopment

export default new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    ...options,
    models: [__dirname + '/models', __dirname + '/models' + '/joins']
})
