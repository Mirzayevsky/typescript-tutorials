namespace Utils  {
  export function loger (text:string,color:string, fontSize?:string):void {
    
  }
}
namespace Animals  {
   export  abstract class  Animal {
       protected _name:string
        constructor(name:string) {
            this._name = name
        }
        abstract sound ():void
    }
}
namespace Animals {

  export  class Tigger  extends Animals.Animal {
         private _sound: string
         #sound:string
        constructor(name:string , sound:string){
            super(name)
            this._sound = sound
            this.#sound = sound
        }
        sound(): void {
            
        }

    }
}
const tigger = new Animals.Tigger('lion','rrr')
// console.log(tigger.#sound)
console.log(tigger)

// const tiger = new Animals.Tigger('name')