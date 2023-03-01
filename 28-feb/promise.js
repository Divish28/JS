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
.then(function(output)
{
    console.log(output)
})
.then(function(){
    console.log("We can use multiple then if promise is resolved")
})
.catch(function(output)
{
    console.log(output)
})
.finally(function(){
    console.log("Whatever the result finally will execute")
})