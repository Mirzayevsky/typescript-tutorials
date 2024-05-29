type A<T> = T


type B = A<string>
type C = A<number>
type R = A<'TS'>

const arr1:(number | string)[] = [223,412,22,'string']
const arr2:Array<number | string> =  [23,123,'newstring']

type myArray<T> = T[];

const arr3:myArray<number> = [23,43,555]

function echo<T> (x: T):T{
 return x
}

const result:string = echo('Hi')

const echo2 = <T>(x:T):T => {
    return x
}
const echo3:<T>(x:T) => T  = <T>(x:T):T =>{ 
    return x
}

const result2 = echo2< string | number >(21)