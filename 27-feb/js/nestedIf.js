const inputNumber=document.querySelector(".number")
const comment=document.querySelector(".statement")
const submit = document.querySelector(".findNumber")

submit.addEventListener("click",FindNumber)

function FindNumber(){
    if(inputNumber>0){
        if(inputNumber==0){
            comment.textContent = "The number is zero"
        }
        else{
            comment.textContent="the number is Positive"
    }
    }
    else{
        comment.textContent="The number is negative"
    }
}

