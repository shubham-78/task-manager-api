require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//promise chainin example
// User.findByIdAndUpdate('61b5833bdd204dc1910cc51b', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//above code using async await
const updateAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('61b5833bdd204dc1910cc51b',5).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})