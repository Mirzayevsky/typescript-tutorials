// // class List<T> {
// //     elements:T[] = []


// //     add(value:T):void{
// //       this.elements.push(value)
// //     }
// // }
// // let data =  new List<number>()

// interface Ilist<T> {
//   elements:T[],
//   add(value:T):void
// }
// type ListType = number | string |boolean

// class List implements Ilist <ListType> {
//     elements: ListType[] = []

//     add(value: ListType): void {
//         this.elements.push(value)
//     }
// }

// let newList  =  new List()
// newList.add(12)

// type  Generic<T> = T
// type Generic<T extends string> = T
type Generic<T> = T extends string ? string : never;

type Generic2 = Generic<string>
type Generic3 = Generic<'JS'>
type Generic4 = Generic<number>


function getName<T extends {name:string,age?:number}>(person:T):void {
  let { name,age } = person
  const info =  `${ name} is in ${age}`
   
} 
getName({name:"Sirojiddin",age:23})


interface IEnter  {
  a:string,
  b:number
  c:boolean
}

type EnterKeys  =  keyof IEnter

function   getProperty <objType,ObjKey extends keyof objType> (
    obj:objType,
    key:ObjKey
) {
  return obj[key];
}

const data = getProperty({name:'Sirojiddin',age:21,LastName:'Mirzayev'},"LastName")