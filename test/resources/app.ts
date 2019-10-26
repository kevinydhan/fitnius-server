import supertest from 'supertest'
import testServer from '../../src/server/app'

/**
 * This is the Express server run with `supertest`. This server is used for
 * testing purposes only.
 */
const request = supertest(testServer)

export default request
