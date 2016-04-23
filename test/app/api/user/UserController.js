const ROOT = require('app-root-path').path
const UserController = require(ROOT + '/app/api/user/usercontroller').default

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

          done()

      })
      .catch((err) =>{
          done(err)
      })
  })

  it('Can login user by email and password using UserController.login', (done) => {
      UserController.login('test@test.com', 'test').then((user) => {
          assert.equal(user.email, 'test@test.com', 'Emails do not match')
          done()

      })
      .catch((err) =>{
          done(err)
      })
  })

  it('Can delete user by id using UserController.delete', (done) => {
      UserController.getUserByEmail('test@test.com').then((user) => {

          assert.equal(user.email, 'test@test.com', 'Emails do not match')

          UserController.delete(user._id).then((response) => {

              assert.equal(response.result.ok, 1)
              done()
          })

      })
      .catch((err) =>{
          done(err)
      })
  })

})
