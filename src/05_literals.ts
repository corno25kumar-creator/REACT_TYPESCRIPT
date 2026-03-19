type Direction = "left" | "right"| 'up'

function move(d:Direction):void{
    console.log(d)
}


const d1 = 'left'  // ts keep the literal types "left"
move(d1)

let d2 = 'right'  //  ts keep the  types string
//move(d2)

let d3 :Direction = "left" 

move(d3)