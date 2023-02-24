const input=document.querySelector("input")
const button=document.querySelector("button")
const Statement=document.querySelector("p")

button.addEventListener("click",Find)

function Find(){
    if(input>0){
        Statement.textContent="It is positive number"
    }
    else{
    Statement.textContent =  "It is negative number"
}
}