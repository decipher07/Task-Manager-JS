const mongoose = require('mongoose')
const validator = require ('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true ,
    useCreateIndex: true ,
    useFindAndModify: false
})

// const User = mongoose.model ('User', {
//     name : {
//         type: String,
//         required : true,
//         trim : true  
//     },
//     email : {
//         type: String ,
//         required : true,
//         trim : true ,
//         lowercase : true ,
//         validate (value) {
//             if (!validator.isEmail(value)) {
//   `              throw new Error ('Email is invalid')
//             }
//         }
//     },  
//     age : {
//         type: Number,
//         default : 0 ,
//         validate (value) {
//             if (value < 0) {
//                 throw new Error ('Age Must Be A Positive Number')
//             }
//         }
//     },
//     password : {
//         type : String ,
//         trim : true ,
//         required : true ,
//         minlength : 7 ,
//         validate (value) {
//             var password = value.includes("password")
//             //console.log(password);
//             if (password){
//                 throw new Error ('Password should not contain the word password')
//             }
//         }
//     }
// })

// const me = new User ({
//     name : '    DJ  ',
//     email :  '  DJ@DJ.com    ',
//     age : 18 ,
//     password : 'DJJD'
// })

// me.save().then (()=>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ', error)
// })

// const Task = mongoose.model('Tasks', {
//     description : {
//         type : String,
//         trim : true ,
//         required : true  
//     },
//     completed : {
//         type : Boolean,
//         default : false 
//     }
// })

// const task = new Task ({
//     description : '                         Descript-1                              ',
//     completed : false 
// })

// task.save().then (() => {
//     console.log (task);
// }).catch((error) => {
//     console.log(error);
// })

