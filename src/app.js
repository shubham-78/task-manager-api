const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app

//below function used for middleware i.e. btw request and router
// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET request are disabled")
//     } else {
//         next()
//     }
// })


//relation btw user and task
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('61beb977e3b93380a3baef03')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('61bdbba66c68d55f0f12080e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()