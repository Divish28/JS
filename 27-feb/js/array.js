const array =["name","course","college"]
const array1=["Year","Age"]
console.log(array)

console.log(array[0])

array.push("year")
console.log(array)

array.unshift("Id")
console.log(array)

array.pop()
console.log(array)

array.shift()
console.log(array)

console.log(array.includes("course"))

const array2 = array.concat(array1)
console.log(array2)

console.log(array.indexOf("college"))

console.log(array.sort())

array3= array.join()
console.log(array3)