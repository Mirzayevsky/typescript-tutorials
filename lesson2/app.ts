// function getFirstNumber<ElementType>(array:ElementType[]){
//     return array[0]
// }

// const numbers = [1,2,4,5]
// const firstNumber =  getFirstNumber<number>(numbers)

// const strings = ['one','two','three','four']
// const firstString =  getFirstNumber<string>(strings)

// // const input = document.querySelector<HTMLInputElement>('.input')
// // input.value

// type APIresponse<Data> = {
//   data:Data,
//   isError:false
// }

// type userResponse = APIresponse<{name:string,age:number}>
// type userBlog = APIresponse<{id:number,title:string}>

// interface IData {
//     name:string,
//     age:number
// }

// const Respon:userResponse = {
//   data:{
//     name:'Sirojiddin',
//     age:23
//   },
//   isError:false
// }

// const blogResponse:userBlog = {
//     data:{
//         id:1,
//         title:'greating things become appear in the middle of advatures'
//     },
//     isError:false
//   }


// interface IName {
//     name:string
// }

// function getName<T extends IName>(obj:T):void{
//    const name =  obj.name
//    console.log(name)
// }
// getName({name:"sirojiddin",age:23}) 

// function getProperty<ObjType,ObjKey extends keyof ObjType>(obj:ObjType,key:ObjKey){
//     return obj[key]
// }

// const result = getProperty({name:"sirojiddin",age:23},"name")


// let arr = [1,'str',true]

// type A<T> = T extends (infer U)[] ? U : never; // it gets types of person array
// type B = typeof arr;
// type C = A<B>

// let person = {name:"sirojiddin",age:23}
// type A2<T> = T extends  {[key:string]: infer U} ? U :never // it gets types of person object
// type B2 = typeof person;
// type C2 = A2<B2>

// type Person = {
//     name:"sirojiddin",
//     age:23,
//     status:"Single",
//     Education:'Bachelor'
// }
// type Person2 = Partial<Person>
// type MyPartial<T> = {[P in keyof T]?:T[P] | undefined}

// type NewPerson = MyPartial<Person> // it is in optional state

// type dataReq = Required<NewPerson> // it is in required state
// type Person = {
//     name?:"sirojiddin",
//     age?:23,
//     status:"Single",
//     Education:'Bachelor'
// }
// type MyRequired<T> = {[P in keyof T]-?:T[P]} // bu yerda objectni olib  keysini  P ga joylaydi va T[P] generic objectni P siga tenglab qoyadi typelarini va required qilib qoyadi

// type NewPerson = MyRequired<Person>

type ColorType = number | string | null | boolean | undefined;
type MyNonNulable<T> = T extends null | undefined ? never : T
type existTypes =  MyNonNulable<ColorType>
type existTypes2 = NonNullable<ColorType>
type Dimensions = {width:string,height:string,length:number,size:number}
type MyDimension<K extends (string | number | symbol),T> = {[P in K]:T}
type NewDimension = MyDimension<"id"|"name"|"status" | "education" | 21,string>

// type Dimension2 = MyDimension<Dimensions>