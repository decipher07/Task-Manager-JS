require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate ('5e77cf6f9f8442780de71377', {age: 1}).then ( (user) => {
//     console.log(user)
//     return User.countDocuments( {age: 1})
// }).then ( (result) => {
//     console.log(result)
// }).catch ((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate (id , {age}) 
    const count = await User.countDocuments({age})
    return count 
}

updateAgeAndCount('5e77cf6f9f8442780de71377', 2).then( (count) => {
    console.log(count)
}).catch ((e) => {
    console.log(e)
})