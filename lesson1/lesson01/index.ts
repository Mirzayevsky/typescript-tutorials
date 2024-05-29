class Project {
    // public readonly _name:string
    public _name:string
    public _age:number

    
    constructor(name:string, age:number){
       this._name = name,
       this._age = age
    }
    // constructor(public  _name:string, public  _age:number){

    // }

    public info(value:number):string{
      return `${this._name} is in${this._age + value}`
    }

    get name():string {
        return this._name
    }
    set  name(value:string){
       this._name = value
    }
    get age():number{
        return this._age
    }
    set age(value:number){
      if(value > 0 && value < 100){
        this._age =  value
      }else{
       throw new Error('aee you ennter not appropraite to system')
      }
    }

}

const Sirojiddin:Project = new Project('Sirojiddin',23)
Sirojiddin.info(12)
