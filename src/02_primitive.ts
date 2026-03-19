// ======================================================
// 📘 TypeScript Basics + Special Types (Hinglish Notes)
// ======================================================


// ------------------------------------------------------
// ✅ 1. Primitive Types (string, number, boolean)
// ------------------------------------------------------

let userName: string = 'sam'
// 👉 Explicit type diya: string
// 👉 Value bhi string hai → sab sahi

let age: number = 20
// 👉 number type → integer, float sab cover karta hai

let isCreator: boolean = true
// 👉 boolean → sirf true / false


// 🧠 NOTE:
// Yaha tum type hata bhi sakte the:
// let age = 20
// TS khud infer kar leta → number


// ------------------------------------------------------
// ⚠️ 2. bigint vs number (IMPORTANT)
// ------------------------------------------------------

// ❌ Ye galat hai:

// const big: bigint = 2n ** 63n + age

// 👉 Problem kya hai?
// - 2n ** 63n → bigint
// - age → number
// 👉 TS allow nahi karta bigint + number mix karna

// 🚫 Error: Cannot mix BigInt and other types


// ✅ Sahi way:

const big: bigint = 2n ** 63n
// 👉 pure bigint calculation

// ✅ Agar number ko bigint banana ho:

const big2: bigint = 2n ** 63n + BigInt(age)
// 👉 conversion kiya using BigInt()


// 🧠 RULE:
// bigint operations me sirf bigint hi use karo
// number aur bigint mix nahi hote


// ------------------------------------------------------
// 🔐 3. unique symbol (Advanced but important)
// ------------------------------------------------------

const token: unique symbol = Symbol("token")

console.log(token)

// 👉 Symbol kya hota hai?
// Unique identifier (har baar new, never equal)

// 👉 unique symbol kya hai?
// TypeScript ka special type
// Har symbol ko completely unique bana deta hai

// Example:

const t1: unique symbol = Symbol("a")
const t2: unique symbol = Symbol("a")

// t1 !== t2 (even same description)

// 🧠 Use case:
// - Hidden object keys
// - Unique identifiers
// - Advanced type-safe APIs


// ------------------------------------------------------
// 🧮 4. Function with types
// ------------------------------------------------------

function year(years: number): number {
    return years * 365
}

console.log(year(34))


// 🔍 Breakdown:

// 👉 years: number
// Function ko pata hai input number hoga

// 👉 return: number
// Function guarantee deta hai number return karega


// ❌ Agar galti kare:

function wrongYear(years: number): number {
  return years * 365  // ❌ error -------------------->  return "365" 
}

// 👉 TS turant pakad lega


// ------------------------------------------------------
// 🧠 MENTAL MODEL
// ------------------------------------------------------

// 1. Primitive types → basic building blocks
//    string, number, boolean

// 2. bigint → large integers ke liye
//    ⚠️ number ke saath mix mat karo

// 3. unique symbol → fully unique identity
//    advanced but powerful

// 4. Functions → input + output dono type karo
//    production me MUST follow


// ------------------------------------------------------
// 🚀 FINAL TAKEAWAY
// ------------------------------------------------------

// 👉 TypeScript strict hai → aur ye achi baat hai
// 👉 Ye tumhe runtime errors se bachata hai

// 👍 Rule follow karo:
// - Simple values → inference
// - Complex / critical → explicit types
// - bigint → isolate karo
// - functions → always typed

// 💯 Clean + Safe + Scalable code = TypeScript