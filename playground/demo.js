// promise chainin concept

const add = (a,b) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

//below is normal asychronous function chaining 
add(1,2).then((sum)=>{
    console.log(sum)

    add(sum,5).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})

//below is promise chaning
add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,2)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})


//asycn await
const doWork = async ()=>{
    const sum = await add(1,2)
    const sum2 = await add(sum,3)
    return sum2
}

doWork().then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

//async await is more useful than promise chaining as it is easy to understand