type ex = {
    role:"admin",
    permission:string[]
}
type ex2 = {
    role:"user",
    epireAt:Date
}
type userEample = ex | ex2

function findUser(p:userEample) {
    if ('permission' in  p) {
        return `admin ${p.permission.join(',')}`
    }
    return `user ${p.epireAt.toISOString()}`
}

console.log(findUser({role:"admin", permission:['read']}))


// avoid runtime crashess

type profile = {
    name:string
    contact?: {email?:string}
}

const pin :profile = {name:'sam'}

const pin2 :profile = {name:'sam', contact:{email:'fduwfd'}}

//pin.contact.email //'pin.contact' is possibly 'undefined'.
const checkEmail = pin.contact?.email


// ??
// ||

