
interface IPerson {
   _name:string,
    sayHello():string
    _age:number
}
// interface IPerson2 {
    
// }
// interface IPersonProps extends IPerson,IPerson2{

// }
abstract class Person implements IPerson {
   _name:string
   public _age:number
    constructor(name:string, age:number){
           this._name = name
           this._age = age
    }
   abstract sayHello(): string
}

class Student extends Person {
    _group:number
    constructor(name:string,age:number,group:number){
        super(name,age)
        this._group = group
    }
    sayHello(): string{
        return ``
    }
}

