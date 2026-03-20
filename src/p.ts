function greet2(host:string, port?: number, secure?:boolean) {
    const p = port ? port : 404
    const s = secure ? secure : false

    return `${host}${p}${s}`
}

const result_greet2 = greet2("localhost", 3000, true)
console.log(result_greet2)
