import supertestServer from '../resources/app'

describe('Express server', () => {
    it('is running', done => {
        supertestServer
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                done()
            })
    })
})
