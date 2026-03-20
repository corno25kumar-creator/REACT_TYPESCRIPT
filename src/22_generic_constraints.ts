function lenght<T extends{length:number}>(p:T):number {
    return p.length
}
console.log(lenght('nd kj'))