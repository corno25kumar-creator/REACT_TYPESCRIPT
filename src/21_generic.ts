// understand what is type para <t>
// how <t> infer from arg 

function id<T>(x:T):T{
    return x
}
const y = id(5)
console.log(y)

function name1<T>(arr:T[]):T|undefined {
    return arr[0]
}

console.log(name1([1,2,3]))