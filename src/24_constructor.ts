class UId {
  id: string;
  name: string;
  isAdmin: boolean;
  age?: number;

  constructor(id:string, name:string, isAdmin:boolean, age?:number){
    this.id = id,
    this.name= name;
    this.isAdmin = isAdmin;
    if(age) this.age = age
  }

}

const result = new UId('1', 'sam', true)
const result1 = new UId('1', 'sam', true, 34)

