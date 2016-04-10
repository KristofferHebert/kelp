const ROOT = require('app-root-path').path
const UserController = require(ROOT + '/app/api/user/UserController').default

import assert from 'assert'

describe('Testing User Controller', () => {
    it('Can create user via UserController.post', (done) => {
        UserController.post({
            'email': 'test@test.com',
            'password': 'test'
        }).then((user) => {
            assert.equal(user.email, 'test@test.com', 'Emails do not match')
            assert.equal(user.password, 'test', 'Passwords do not match')

            done()

        })
        .catch((err) =>{
            done(err)
        })
    })

    it('Can get user by email using UserController.getUserByEmail', (done) => {
        UserController.getUserByEmail('test@test.com').then((user) => {

            assert.equal(user.email, 'test@test.com', 'Emails do not match')
            assert.equal(user.password, 'test', 'Passwords do not match')

            done()

        })
        .catch((err) =>{
            done(err)
        })
    })
})
