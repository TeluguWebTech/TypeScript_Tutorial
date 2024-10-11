
type fruitType = {color:string, price:number, discount:boolean}

const apple:fruitType = {
    color:'red',
    price: 55,
    discount: true
}
const mango:fruitType = {
    color:'red',
    price: 55,
    discount: true
}

apple.color="greenAPple"
apple.price= 200
apple.discount = false

console.log("fruit color:", apple.color)
console.log("fruit price:", apple.price)
console.log("fruit discount:", apple.discount)

// Inference & Annotations

const newCar = {
    color:'red',
    price: 55,
    discount: true
}

newCar.color = 'marron'
