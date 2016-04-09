const ROOT = require('app-root-path').path
const UserController = require(ROOT + '/app/api/user/UserController').default

import assert from 'assert'

describe('Testing User Controllert', () => {
    it('Can create user via UserController.post', (done) => {
        UserController.post({
            'email': 'test@test.com',
            'password': 'test'
        }).then((user) => {
            done()

        })
        .catch((err) =>{
            done()
        })
    })

    it('Can get user by email using UserController.getUserByEmail', (done) => {
        UserController.getUserByEmail('test@test.com').then((user) => {
            assert(user.email === 'test@test.com', 'User not found ')
            done()
        })
        .catch((err) =>{
            done()
        })
    })
})
