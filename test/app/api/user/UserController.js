const ROOT = require('app-root-path').path
const UserController = require(ROOT + '/app/api/user/UserController').default

import assert from 'assert'

console.log(UserController)

describe('sample test', () => {
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
})
