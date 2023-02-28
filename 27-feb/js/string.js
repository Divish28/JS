const srting="Divish"
const srting1="Kumar"
const srting2="    Karthik    "

const string3 =  srting.length
console.log("Length:", string3)

const string4 = srting.concat(' ', srting1 ," ", srting2)
console.log("concat:",string4)

const string5= string4.toUpperCase()
console.log("to Uppercase: ",string5)

const string6=string5.toLowerCase()
console.log("to Lowercase: ",string6)

const string7= srting2.trim()
console.log("Trim:",string7)

console.log("Trim End:",srting2.trimEnd())

console.log("Trim Start:",srting2.trimStart())

const string8 = string4.slice(4,9)
console.log(string8)

const string9=string5.split()
console.log(string9)