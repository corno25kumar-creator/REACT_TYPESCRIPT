//tyoe of primitives
function typesDef(x:unknown) {
    
    if (typeof  x === 'string') {
        return `string`
    }
     if (typeof  x === 'number') {
        return `number`
    }
     if (typeof  x === 'boolean') {
        return `boolean`
    }
     if (typeof  x === 'object') {
        return `object`
    }
     if (typeof  x === 'undefined') {
        return `undefined`
    }
     if (typeof  x === 'function') {
        return ()=>{}
    }
     if (typeof  x === 'bigint') {
        return `bigint`
    }
     if ( x === null) {
        return `null`
    }
     if (typeof  x === 'symbol') {
        return `symbol`
    }
}


console.log(
    typesDef('hi'),
    typesDef(23),
    typesDef(true),
    typesDef(10n),
    typesDef(Symbol('sam')),
    typesDef(undefined),
    typesDef(()=>{}),
    typesDef(null),
    typesDef({}),
)


function checkREF(p:unknown) {
    if (Array.isArray(p)) {
        return p
    }
    if (p instanceof Date) {
        return p
    }
    if (p instanceof Error) {
        return new Error('jdkbe')
    }
}

console.log(
    checkREF([12,23]),
    checkREF(new Date()),
    checkREF(new Error(`hbwjd`)),
)