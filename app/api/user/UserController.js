import UserModel from './usermodel'

const UserController = {

  // Get User by ID, returns a promise
  get (id) {
    const promise = new Promise((resolve, reject) => {
      if (id) {
        UserModel.findOne({_id: id}, (err, user) => {
          if (err) {
            return reject(err)
          }
          return resolve(user)
        })
      } else {
        UserModel.find({}, (err, user) => {
          if (err) {
            return reject(err)
          }
          return resolve(user)
        })
      }
    })
    return promise
  },

  // Create User based on data object, returns a promise
  post (data) {
    const promise = new Promise((resolve, reject) => {
      console.log()
      UserModel.register(new UserModel(data), data.password, function (err, user) {
        if (err) {
          return reject(err)
        }
        resolve(user)
      })
    })

    return promise
  },

  // Authenticate via email and password
  login (email, password) {
    const promise = new Promise((resolve, reject) => {
      this.getUserByEmail(email)
      .then((user) => {
        if (!user) return resolve(null)
        user.authenticate(password, (err, user) => {
          if (err) reject(err)

          let response = user || {
            error: 'Please provide valid email and password'
          }

          resolve(response)
        })
      })
      .catch((err) => {
        reject(err)
      })
    })

    return promise
  },

  // Delete User based on ID, returns a promise
  delete (id) {
    const promise = new Promise((resolve, reject) => {
      UserModel.findOne({_id: id}).remove((err, removed) => {
        if (err) {
          return reject(err)
        }
        return resolve(removed)
      })
    })

    return promise
  },

  // Get User by User email
  getUserByEmail (email) {
    const promise = new Promise((resolve, reject) => {
      UserModel.findOne({email: email}, (err, user) => {
        if (err) {
          return reject(err)
        }
        return resolve(user)
      })
    })

    return promise
  }

}

export default UserController
