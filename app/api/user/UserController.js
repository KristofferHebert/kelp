import UserModel from './UserModel'

const UserController = {

    // Get User by ID, returns a promise
    get(id){
        const promise = new Promise((resolve, reject) => {
            UserModel.findOne({_id: id}, (err, user) => {

                if(err)
                    return reject(err)

                return resolve(user)
            })

        })

        return promise
    },

    // Create User based on data object, returns a promise
    post(data){
        const newuser = new UserModel(data)

        const promise = new Promise((resolve, reject) => {
            newuser.save((err, newuser)=> {

                if(err)
                    return reject(err)

                return resolve(newuser)
            })
        })

        return promise
    },

    // Delete User based on ID, returns a promise
    delete(id){
        const promise = new Promise((resolve, reject) => {
            UserModel.findOne({_id: id}).remove((err, removed) => {

                if(err)
                    return reject(err)

                return resolve(removed)
            })

        })

        return promise
    },

    // Get User by User email

    getUserByEmail(email){
        const promise = new Promise((resolve, reject) => {
            UserModel.findOne({email: email}, (err, user) => {

                if(err)
                    return reject(err)

                return resolve(user)
            })

        })

        return promise
    }

}

export default UserController
