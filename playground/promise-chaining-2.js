require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e787781dbe9b52fb989162b').then( (task) => {
//     console.log(task)
//     return Task.countDocuments ({
//         completed : false  
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false })
    return count
}

deleteTaskAndCount('5e77b5d21bc3975f46879ff9').then ( (result) => {
    console.log(result)
}).catch( (error) => {
    console.log(error)
})