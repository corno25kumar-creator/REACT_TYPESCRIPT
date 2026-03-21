interface UserDemo {
  id: string;
  name: string;
  isAdmin: boolean;
  age?: number;
}


// partial ----> Makes all properties of Type optional.
const payload: Partial<UserDemo> = {}

// reauired ----> Makes all properties of Type required

const payload2: Required<UserDemo> = {id: 'sam',name: 'sam12',isAdmin: true, age: 3,}

// Readonly ---> Makes all properties of Type readonly (cannot be reassigned).

const payload3: Readonly<UserDemo> = { id: "1", name: "John", isAdmin: false  };
console.log(payload3.name)
//payload3.id=2 ---------> Cannot assign to 'id' because it is a read-only property.

// Pick<Type, Keys> ----> Constructs a type by picking a subset of properties from a given Type.
const payload4 : Pick<UserDemo, "id" | "isAdmin"> = {id:"1", isAdmin:true}

// Omit<Type, Keys> ---------->  Constructs a type by omitting specific properties from a given Type.
const payload5: Omit<UserDemo, "age" | "isAdmin"> = { id: "1", name: "John" };

// Record<Keys, Type> ----> To create a dictionary-like object.

type UserRoles = 'ADMIN' | 'CUSTOMER' | 'SUPER_ADMIN'

// Valid ✅
const roleMatrix: Record<UserRoles, boolean> = {
  'ADMIN': true,
  'CUSTOMER': true,
  'SUPER_ADMIN': false
}

// Not Valid ❌
// const roleMatrix: Record<UserRoles, boolean> = {
//   'ADMIN': true,
//   'CUSTOMER': true,
//   'SUPER_ADMIN': false,
//   'MANAGER': true // Error: As MANAGER is not present in UserRoles
// }


/*
🧠 Exclude<Type, ExcludedUnion> kya karta hai ---->  Ye ek filter machine hai
👉 Ye Type (union type) me se un values ko remove karta hai jo ExcludedUnion me diye hote hain
 */

type UserRoles2 = 'ADMIN' | 'CUSTOMER' | 'SUPER_ADMIN'

type AdminRoles = Exclude<UserRoles, 'CUSTOMER'>

// type AdminRoles = 'ADMIN' | 'SUPER_ADMIN'

// Extract<Type, Union> ------>  Extracts from Type those types that are assignable to Union.
type UserRoles3 = 'ADMIN' | 'CUSTOMER' | 'SUPER_ADMIN'

type AdminRoles2 = Extract<UserRoles, 'ADMIN' | 'SUPER_ADMIN'> // Only include 'ADMIN' & 'SUPER_ADMIN' from UserRoles

//const role3: AdminRoles = 'CUSTOMER' // Not Valid ❌ Type '"CUSTOMER"' is not assignable to type 'AdminRoles'.
const role2: AdminRoles = 'ADMIN' // Valid ✅

//NonNullable<Type> ---->  Excludes null and undefined from Type.

type UserId = string | number | null | undefined;

// Valid ✅
const id1: UserId = '12'
const id2: UserId = 12
const id3: UserId = null
const id4: UserId = undefined

type NonNullId = NonNullable<UserId>

// Not Valid ❌
//const id5: NonNullId = null; 


function greet(name: string): string {
    return `Welcome, ${name}!`;
}

// Get the return type of greet() i.e. string
type GreetReturn = ReturnType<typeof greet>;

// Create a variable of GreetReturn type
let message: GreetReturn = greet("Lord Vader");
console.log(message);

