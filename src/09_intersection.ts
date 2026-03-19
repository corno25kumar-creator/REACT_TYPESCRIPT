type inter1 = {
    id:string
}
type inter2 = {
    createdAt : Date
}

type Entity = inter1 & inter2
const e : Entity = {id:'21', createdAt: new Date()}