function sumall(...d : number[]):number {
    return d.reduce((s, n)=> s +n, 0)
}

console.log(sumall(1,2,3,4))

function draw(x:number, y:number):void {
    console.log(x, y)
}

const point = [10, 20]
//draw(...point)// not a fixed types A spread argument must either have a tuple type or be passed to a rest parameter.

const points = [10, 20] as const

draw(...points)