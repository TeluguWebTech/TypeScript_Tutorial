
class Employee{
    name: string;
    age: number;
    department: string;

    constructor(name:string, age:number, department:string){
        this.name = name;
        this.age = age;
        this.department = department
    }
    employeeDetails(){
            console.log(`Employee name is ${this.name} from ${this.department} Department`)
    }
}

const employee = new Employee("Mahesh", 30, "Testing")
employee.employeeDetails()

const anotherEmp = new Employee("Suresh", 32, "Accounts")
anotherEmp.employeeDetails()

