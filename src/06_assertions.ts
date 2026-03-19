// ======================================================
// 📘 TypeScript Assertions vs Type Guards (Hinglish Notes)
// ======================================================


// ------------------------------------------------------
// ❌ 1. Type Assertion (Risky Approach)
// ------------------------------------------------------

const raw = '{"id": 1, "name": "sam"}'

// 👉 JSON.parse ka return type hota hai: any (ya unknown in strict setups)
// 👉 TS ko nahi pata andar kya structure hai

const riskyUser = JSON.parse(raw) as { id: number; name: string }

console.log(riskyUser)


// 🧠 Explanation:

// 👉 "as" ko bolte hain TYPE ASSERTION
// 👉 Tum TypeScript ko bol rahe ho:
// "Trust me bro, ye object isi shape ka hai"

// ⚠️ Problem:
// - TS blindly maan lega
// - Runtime pe agar data galat hua → crash


// ❌ Example danger:

const badRaw = '{"id": "wrong", "name": 123}'

const badUser = JSON.parse(badRaw) as { id: number; name: string }

// 👉 TS bolega: sab sahi hai ✅
// 👉 But actual me:
// id = string ❌
// name = number ❌

// 👉 runtime bugs aayenge


// ------------------------------------------------------
// ✅ 2. Safe Approach — Type Guard
// ------------------------------------------------------

type user06 = {
    id: number
    name: string
}


// ------------------------------------------------------
// 🔍 Custom Type Guard
// ------------------------------------------------------

function isUser(v: unknown): v is user06 {
   return (
    typeof v === "object" && 
    v !== null && 
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
   )
}


// 🧠 Explanation:

// 👉 v: unknown
// - safest type (kuch assume nahi kar sakte)

// 👉 v is user06
// - ye special syntax hai (TYPE PREDICATE)
// - TS ko batata hai:
//   "agar ye function true return kare, to v ka type user06 hai"


// ------------------------------------------------------
// ✅ Safe Parsing Flow
// ------------------------------------------------------

const may_be = JSON.parse(raw) as unknown

// 👉 Step 1: unknown me rakho (safe)
// 👉 Step 2: validate karo using type guard

if (isUser(may_be)) {
    console.log(may_be.name) // ✅ safe
}


// 🧠 Yaha kya hua:

// 👉 TS pehle nahi jaanta tha may_be kya hai
// 👉 isUser() check ke baad:
// TS samajh gaya → ye user06 hai


// ------------------------------------------------------
// ⚠️ Why (v as any) use kiya?
// ------------------------------------------------------

// 👉 "id" in v check ke baad bhi TS sure nahi hota type ka
// 👉 isliye temporarily "any" use kiya to access property

// ⚠️ Ye controlled use hai (safe inside guard)


// ------------------------------------------------------
// 🔥 Assertion vs Type Guard
// ------------------------------------------------------

// ❌ Assertion (as):
// - fast
// - no checking
// - risky

// ✅ Type Guard:
// - thoda verbose
// - safe
// - runtime validation


// ------------------------------------------------------
// 🧠 REAL-WORLD USE (VERY IMPORTANT)
// ------------------------------------------------------

// 👉 Jab bhi:
// - API response
// - localStorage data
// - JSON.parse data

// 👉 ALWAYS validate before use


// ------------------------------------------------------
// 🚀 FINAL RULE
// ------------------------------------------------------

// ❌ "as" use mat karo blindly
// 👉 ye sirf TS ko chup karata hai

// ✅ unknown + type guard use karo
// 👉 ye actual safety deta hai


// ------------------------------------------------------
// 💯 ONE-LINE SUMMARY
// ------------------------------------------------------

// 👉 Assertion = "Trust me"
// 👉 Type Guard = "Let me check first"