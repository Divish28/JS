function intro(name,welcome){
    console.log("hi "+name)
    welcome()
}
function call(){
    console.log("I am from Hosur")
}
intro("Divish",call) 