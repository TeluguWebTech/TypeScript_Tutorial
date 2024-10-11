
function apple(){
    return "this is string"
}

let a = 99;
let b = "suresh"

function user():number{
    return a
}

// function expression

const addingNumbers = function(c:number, d:number):number{
    return c+d
}

addingNumbers(55, 65)

// Optional Parameters

const product = (title:string, price:number, discount?:boolean)=>{
        return `The product name is ${title} and price is ${price}`
}

console.log(product("samsung", 11500, "nokia"))


