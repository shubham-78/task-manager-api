const bcrypt = require('bcryptjs')

const myFunction = async ()=>{
    const password = "Red12345@"
    const hashedpassword = await bcrypt.hash(password,8)

    console.log(password)
    console.log(hashedpassword)

    const isMatch = await bcrypt.compare('Red12345@', hashedpassword)
    console.log(isMatch)
}
myFunction()