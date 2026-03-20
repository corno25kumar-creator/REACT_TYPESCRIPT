// tuples --> fixed length and types
//(string | number)[]
// optional tuples 


const tuple : [string, number ] = ['hello', 24]


type ResponseRow = { status: number, msg?:string}

//const rfill : ResponseRow = [200]

const tup : readonly [number, string]= [2, 'hello']