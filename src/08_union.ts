type Role = "admin" | "user" | "guest"

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()) // ✅ string
  } else {
    console.log(val.toFixed(2))    // ✅ number
  }
}

type User08 = { name: string }
type Admin = { role: string }

type Person = User08 | Admin

let p : Person = { name: "sam" }   // ✅
p = { role: "admin" }             // ✅