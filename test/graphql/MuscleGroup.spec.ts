import request from '../resources/app'
import connection, { initializeTestDatabase } from '../resources/database'

// =============================================================================
// Globals
// =============================================================================

beforeAll(async () => {
    await initializeTestDatabase()
})

// =============================================================================
// Supertest Requests
// =============================================================================

interface RequestParameters {
    status: number
    query: string
}

const requestToGraphQLAPI = (args: RequestParameters) => {
    return request
        .post('/graphql')
        .send({ query: args.query })
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(args.status)
}

// =============================================================================
// Jest/Supertest Tests
// =============================================================================

describe('GraphQL resolvers for MuscleGroup', () => {
    describe('Query: muscleGroups', () => {
        it('returns a response body where res.body.data.muscleGroups is defined', done => {
            requestToGraphQLAPI({
                status: 200,
                query: `
                    query {
                        muscleGroups { id }
                    }
                `
            }).end((err, res) => {
                if (err) return done(err)

                expect(res.body).toBeDefined()
                expect(res.body.data).toHaveProperty('muscleGroups')
                done()
            })
        })

        it('returns an empty array when there are no instances in the MuscleGroup table', done => {
            requestToGraphQLAPI({
                status: 200,
                query: `
                    query {
                        muscleGroups { id }
                    }
                `
            }).end((err, res) => {
                if (err) return done(err)

                expect(res.body.data.muscleGroups).toEqual(
                    expect.arrayContaining([])
                )
                done()
            })
        })
    })

    describe('Mutation: createMuscleGroup', () => {
        it('returns the newly created instance in the response body', done => {
            requestToGraphQLAPI({
                status: 200,
                query: `
                    mutation {
                        createMuscleGroup(input: { name: "Test" }) {
                            id name
                        }
                    }
                `
            }).end((err, res) => {
                if (err) return done(err)

                expect(res.body.data.createMuscleGroup).toBeDefined()
                expect(res.body.data.createMuscleGroup.id).toBeDefined()
                expect(res.body.data.createMuscleGroup.name).toBe('Test')

                done()
            })
        })
    })

    describe('Mutation: updateMuscleGroup', () => {})

    describe('Mutation: deleteMuscleGroup', () => {})
})
