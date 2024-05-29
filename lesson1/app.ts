
let array:(string | number | boolean)[] = [23,false,'sirojiddin']
type tip<T> = T extends (infer U) [] ? U:never
type tip1 = typeof array

type ctip = tip1
