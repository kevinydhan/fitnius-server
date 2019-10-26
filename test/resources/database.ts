import connection from '../../src/database/connection'

/**
 * Initializes a database connection for testing purposes.
 *
 * @returns {Bluebird<Sequelize>}
 */
export const initializeTestDatabase = () => connection.sync({ force: true })

export default connection
