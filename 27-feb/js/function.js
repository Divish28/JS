const inputA = document.querySelector(".first-input")
const inputB = document.querySelector(".Second-input")
const addition = document.querySelector(".Add-Button")
const para=document.querySelector(".result")

addition.addEventListener("click",addNumbers)


function addNumbers(a,b) { //Function with parameter
    const c = a+b;
    para.textContent = `Addition of ${a} & ${b} is ${c}`
    console.log(c);
}
addNumbers(inputA,inputB)