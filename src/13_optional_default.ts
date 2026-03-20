function greet(name?:string):string {
    const result =name? name?.toUpperCase():"guest"
    return result
}

console.log(greet('sam'))

function greet1(name:string = 'raj'):string {
    const result =name? name?.toUpperCase():"guest"
    return result
}

console.log(greet('sam'))



// function greet2(host:string, port?: number, secure?:boolean) {
//     const p = port? port : 404
//     const s = secure? secure:false

//     return `${host}\ ${p}\${s}`
// }

// const result_greet2 = greet2("loaclhost", 3000, true)
// console.log(result_greet2)

// function greet2(host:string, port?: number, secure?:boolean) {
//     const p = port ? port : 404
//     const s = secure ? secure : false

//     return `${host}${p}${s}`
// }

// const result_greet2 = greet2("localhost", 3000, true)
// console.log(result_greet2)
