// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectId

// //Destructuring above mongodbs
// const { MongoClient, ObjectID } = require('mongodb')

// const connectionUrl = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-app'
// // const id = new ObjectID() 

// MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log("Unable to connect to database!")
//     }
//     const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         // _id: id,
//         name: 'Vaibhav',
//         age: 24
//     }, (error, result) => {
//         if(error){
//             return console.log("Unable to insert user")
//         }
//         console.log(result.ops)
//     })

//     db.collection('tasks').insertMany([
//         {
//             description: "Math Task",
//             completed: true
//         },
//         {
//             description: "Physics Task",
//             completed: true
//         }
//     ], (error, result) => {
//         if(error){
//             return console.log("Unable to insert task")
//         }
//         console.log(result.ops)
//     })
//     db.collection('users').findOne({
//         _id: new ObjectID("61b1fd5b23039253e0615039")
//     }, (error, user) => {
//         if (error) {
//             return console.log("Unable tp fetch")
//         }
//         console.log(user)
//     })

//     db.collection('users').find({
//         age: 24
//     }).toArray((error, users)=>{
//         console.log(users)
//     })

//     // Both below are correct way coding
//     const updatePromeise = db.collection('users').updateOne({
//         _id: new ObjectID("61b1fd5b23039253e0615039")
//     }, {
//         $set: {
//             name: "Rohit"
//         }
//     })

//     updatePromeise.then((result) => {
//         console.log(result)
//     }).catch((error) =>{
//         console.log(error)
//     })
//     db.collection('users').updateOne({
//         _id: new ObjectID("61b1fd5b23039253e0615039")
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) =>{
//         console.log(error)
//     })

//     db.collection('users').deleteMany({
//         age: 24
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })
