
interface Student{
    name: string;
    age: number;
    height?: string
}

interface Player extends Student{
        playerId: string
}

const captain:Player ={
    name: "Suresh",
    age: 15,
    height : "160 cms",
    playerId: "Amd1526"
}

console.log(`student name is ${captain.name} and ${captain.height} with id ${captain.playerId}`)



// const student:Student = {
//     name: "Pratap",
//     age: 11,

// }

// const newStudent:Student ={
//     name: "Anil",
//     age: 12,
//     height: "150 cms"
// }

// console.log(`student name is ${newStudent.name} and ${newStudent.height}`)

// Type Aliases

type dataSampleType = string | number 

interface Product{
    name: dataSampleType;
    desc: dataSampleType;
    price: dataSampleType;
    discount: dataSampleType | boolean ;

}

const sampleProduct:Product ={
    name: "Mobile",
    desc: "good mobile",
    price: 15000, 
    discount: false
    
}

console.log(sampleProduct.price)


