interface user  {
  id: string,
  name:string,
  email?:string,
  age:number,
  readonly createAt :  Date
}

const userSam : user = {
  id: 'sam1232414242',
  name:"sam",
  email:"example123@gmail.com",
  age:12,
  createAt :  new Date()
}

/// extend 
interface AdminSam extends user {
  permission : string[]
}


const userSamAdmin : AdminSam = {
  id: 'sam1232414242',
  name:"sam",
  email:"example123@gmail.com",
  age:12,
  createAt :  new Date(),
  permission:["admin"]
}

interface metal  extends AdminSam, user{
    meta:{
        active:boolean
    }
}



const userSamAdminMetal : metal = {
  id: 'sam1232414242',
  name:"sam",
  email:"example123@gmail.com",
  age:12,
  createAt :  new Date(),
  meta:{active:true},
  permission:["admin"]
}
