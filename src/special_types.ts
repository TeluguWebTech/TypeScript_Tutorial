
// void

// void type , a function that is not returning anything is called void type

// function userName():void{
//     return "Kalyan"
// }

function studentName(name:string){
        console.log(`student name is:`, name)
}

// studentName("suresh")

// function addNumbers(a:number, b:number):void{
//         return a+b
// }

// Null
let a:null //( null is used to explicityly assign as empty value to a variable)
a:null
a = "apple";
a = 55 

// Undefined
// undefined type will accept only undefined as value not (string, number or boolean)
let stadium:undefined;

stadium="happy"
stadium = true

console.log(stadium)

// Never

// Never is used when a function never completes or never returns a value.

function failedToConnect():never{
        throw new Error("Connection failed")
}

const DBConnection =()=>{
        try {
                console.log("Db connected")
        } catch (error) {
                failedToConnect()
        }
}

