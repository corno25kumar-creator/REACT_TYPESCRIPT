// ======================================================
// 📘 TypeScript Type Inference — Hinglish Deep Notes
// ======================================================

// 🔥 CORE IDEA:
// TypeScript khud tumhare code ko read karke types samajh leta hai.
// Is process ko bolte hain 👉 "Type Inference"

// Tumhara kaam:
// ❌ Har jagah type likhna nahi
// ✅ Sirf waha type dena jaha TypeScript ko help chahiye

// ------------------------------------------------------
// ✅ RULE 1 — Simple values me TypeScript pe trust karo
// ------------------------------------------------------

let a = 10
// 👉 TS automatically samajh gaya: number

const str = "hello"
// 👉 TS inferred: "hello" (LITERAL TYPE)
// NOTE: Ye sirf string nahi hai, exact value "hello" hai

const obj = {}
// 👉 TS inferred: {} (empty object type)


// ❗ IMPORTANT CONCEPT — LITERAL vs WIDE TYPE

const x = "hi"       
// 👉 type: "hi" (exact value)

let y = "hi"         
// 👉 type: string (kyunki let change ho sakta hai)


// ❌ Galti kya hoti hai?

const str2: string = "hello"
// 👉 Tumne TS ka smart inference tod diya
// 👉 "hello" (precise) → string (broad)

// ⚠️ Isko bolte hain "Type Widening"
// Matlab: exact type se general type me convert kar diya


// ✅ RULE:
// Jaha TS clearly dekh sakta hai value → type mat likho
// Over-annotation = unnecessary noise


// ------------------------------------------------------
// ✅ RULE 2 — Functions me parameters ALWAYS annotate karo
// ------------------------------------------------------

export function sum(a: number, b: number): number {
  return a + b
}

// 🔍 Explanation:

// 👉 Parameters (a, b)
// TS nahi jaanta caller kya pass karega
// Isliye yaha type dena MUST hai

// 👉 Return type (: number)
// Optional hai (TS infer kar sakta hai)
// BUT production me likhna better hai

// 🎯 Benefit:
// Agar galti se return change ho gaya:

export function wrongSum(a: number, b: number): number {
  return a + b //return "hello" --------------->  ❌ error yahi par milega
}

// Agar return type nahi likhte:
// Error baad me caller side pe aata (hard to debug)


// ------------------------------------------------------
// ✅ RULE 3 — Unknown / Deferred values me annotation zaroori hai
// ------------------------------------------------------

let maybe: string | number
// 👉 Abhi koi value nahi hai
// 👉 TS guess nahi kar sakta

maybe = Math.random() > 0.5 ? "math" : 10

// 👉 Ye UNION TYPE hai
// matlab: value kabhi string hogi, kabhi number


// ------------------------------------------------------
// 🔍 TYPE NARROWING (VERY IMPORTANT)
// ------------------------------------------------------

if (typeof maybe === "string") {
  maybe.toUpperCase()
  // ✅ TS samajh gaya: yaha string hai
} else {
  maybe.toFixed(2)
  // ✅ TS samajh gaya: yaha number hai
}

// 👉 Is process ko bolte hain "Type Narrowing"
// TS runtime checks se type ko refine karta hai


// ------------------------------------------------------
// 🧠 MENTAL MODEL (INTERVIEW GOLD)
// ------------------------------------------------------

// 🎯 Rule yaad rakho:

// 1. TS value dekh sakta hai → INFER karne do
//    Example:
//    const x = 10  ❌ (type mat likho)

// 2. TS value nahi dekh sakta → TYPE do
//    Example:
//    function params, empty variables

// 3. Value multiple types ho sakti hai → UNION use karo
//    Example:
//    string | number

// 4. Runtime check se type refine karo → NARROWING


// ------------------------------------------------------
// ⚖️ BALANCE (VERY IMPORTANT)
// ------------------------------------------------------

// ❌ Over-annotation → code messy ho jata hai
// ❌ Under-annotation → bugs aate hain

// ✅ Sweet Spot:
// 👉 Inside code → inference pe trust karo
// 👉 Boundaries pe → explicit types likho

// Boundaries kya hoti hain?
// - Function parameters
// - Exported functions
// - API responses
// - Uninitialized variables


// ------------------------------------------------------
// 🚀 FINAL TAKEAWAY
// ------------------------------------------------------

// TypeScript ka goal hai:
// "Less typing, more safety"

// Tumhara goal hona chahiye:
// 👉 Clean code
// 👉 Smart inference
// 👉 Strategic annotations

// 👍 Agar tum har jagah type likh rahe ho → tum TS ko use nahi kar rahe
// 👍 Agar tum kahi bhi type nahi likh rahe → tum bugs invite kar rahe

// 👉 Balance hi real skill hai 💯