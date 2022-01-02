const jwt = require('jsonwebtoken')

const myFunction = async()=>{
    const token = jwt.sign({_id:'abc123'}, "thisismycourse",{expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, "thisismycourse")
    console.log(data)
}
myFunction()