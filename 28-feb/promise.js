const promise=new Promise(function(resolve,reject){
    const num = 3
    if(num==3){
        resolve("Promise is resolved")
    }
    else{
        reject("Promise is rejected ")
    }
})

promise
.then(function display(output)
{
    console.log(output)
})
.catch(function catching(output)
{
    console.log(output)
})
.finally(function final(){
    console.log("Whatever the result finally will execute")
})