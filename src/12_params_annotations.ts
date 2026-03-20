function func1(a:number, b:number): number {
    return a + b
}

const num12 =[1,2,3]

const dou = num12.map(n=> n*2)

const time2 = (n:number):number => n*2//Parameter 'n' implicitly has an 'any' type.

type point = {x:number, y: number}

function h(p:point):number {
 return Math.hypot(p.x, p.y)   
}

console.log(h({x:3, y:5}))