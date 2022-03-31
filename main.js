const numbers = [1, 2, 3, 4, 5]
const fruits = ["Apple", "Banana", "Cherry"]

numbers.forEach(function(item, i) {
    console.log(`${item} : ${i+1}번째 숫자`)
})

fruits.forEach(function(item, i) {
    console.log(`${item} : ${i+1}번째 과일`)
})

console.log(fruits)