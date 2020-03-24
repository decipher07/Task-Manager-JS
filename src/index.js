require('./db/mongoose')
const express = require ('express')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')

const app = express ()
const port = 3000 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port , () => {
    console.log('Server is up on Port 3000' )
})

// const Task = require('./models/task')
// const User = require('./routers/user')

// const main = async () => {
//     // const task = await Task.findById('5e7a82a11d652b76ae4c26d9')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     // const user = await User.findById('5e7a810a0b59f5746e9c2e58')
//     // await user.populate('tasks').execPopulation()
//     // console.log(user.tasks)
// }




// main()


// app.use ( (req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     // console.log(req.method, req.path)
//     // next()
// })

// app.use ( (req, res, next) => {
//     res.status(503).send(`${req.method} requests are disabled Temporarily`)
//     next ()
// })


// const pet = {
//     name: 'Hal'
// }

// console.log(JSON.stringify(pet))









// const bcrypt = require ('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign( { _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()
















    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
    
    //res.send('testing!')
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
    // User.findById(_id).then((user) => {
    //     if (!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
    //console.log (req.params)

// task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })

   // Task.find({ }).then( (task) => {
    //     if (!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch( (error) => {
    //     res.status(400).send(error)
    // })
   // Task.findById(_id).then( (task) => {
    //     if (!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch ( (error) => {
    //     res.status(400).send(error)
    // })
    //console.log(req.params)