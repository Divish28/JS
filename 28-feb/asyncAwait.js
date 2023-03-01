const promise = new Promise(function(resolve,reject){
    console.log("Hi")
    setTimeout(function multiply(){
        const a=2,b=3
        const c=a*b
        resolve("Multiply:"+c)
    }, 2000);
})

async function Async(){
    console.log("This is multiply")
    const awaitFunction = await promise
    console.log(awaitFunction)
}
Async()