const input=document.querySelector("input")
const button=document.querySelector("button")
const statement=document.querySelector("p")

button.addEventListener("click",Find)

function Find(){
    if(input<0){
        statement.textContent = "It is negative number"
    }
    else{
    statement.textContent =  "It is positive number"
}
}