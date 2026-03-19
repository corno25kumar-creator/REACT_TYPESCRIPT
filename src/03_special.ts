// ======================================================
// 📘 TypeScript Core Concepts (Strict Mode + Functions)
// ======================================================


// ------------------------------------------------------
// ✅ 1. Type Inference + Strict Null Check
// ------------------------------------------------------

let title = "intro"

// 👉 TS inferred: string
// 👉 strict mode me:
// title = undefined ❌ error

// 💥 Error:
// Type 'undefined' is not assignable to type 'string'


// ------------------------------------------------------
// ✅ 2. Union with undefined (optional value)
// ------------------------------------------------------

let subtitle: string | undefined = undefined

// 👉 Iska matlab:
// - subtitle ya to string hoga
// - ya undefined hoga

// 👉 Useful jab value initially available na ho

subtitle = "TypeScript basics" // ✅ allowed


// ------------------------------------------------------
// ✅ 3. Callback Function (void return)
// ------------------------------------------------------

function ignored_Function(cb: () => void): void {
    cb()
}

// 👉 cb: function hai jo:
// - kuch input nahi leta
// - kuch return nahi karta (void)

function callBack() {
    console.log(`i just log the value only nothing else`)
}

ignored_Function(callBack)

// 👉 Output:
// i just log the value only nothing else


// ------------------------------------------------------
// ⚠️ IMPORTANT — void ka matlab
// ------------------------------------------------------

// 👉 "void" ka matlab:
// function ka return value IMPORTANT nahi hai

// 👉 Agar callback kuch return kare bhi:
function cbExample() {
    return 10
}

ignored_Function(cbExample) // ✅ still allowed

// 👉 Kyunki ignored_Function return value use nahi kar raha


// ------------------------------------------------------
// ❌ Galti kya hoti hai?
// ------------------------------------------------------

// function wrong(cb: () => void) {
//     const result = cb()
//     console.log(result.toFixed(2)) // ❌ ERROR
// }

// 👉 Error:
// Property 'toFixed' does not exist on type 'void'


// ------------------------------------------------------
// 🔥 4. NEVER type (VERY IMPORTANT)
// ------------------------------------------------------

function Error_Message(msg: string): never {
    throw new Error(msg)
}

// 👉 "never" ka matlab:
// - function kabhi normal tarike se complete nahi hota
// - ya to error throw karega
// - ya infinite loop me chala jayega


// Example:

function infiniteLoop(): never {
    while (true) {}
}


// ------------------------------------------------------
// 🧠 void vs never (CONFUSION CLEAR)
// ------------------------------------------------------

// void:
// 👉 function complete hota hai
// 👉 bas kuch return nahi karta

function demo(): void {
    console.log("done")
}

// never:
// 👉 function kabhi complete hi nahi hota

function crash(): never {
    throw new Error("boom")
}


// ------------------------------------------------------
// 🚫 5. "any" keyword avoid karo
// ------------------------------------------------------

// ❌ Bad practice:
let data: any

// 👉 any ka matlab:
// - TypeScript band ho gaya 😅
// - koi type checking nahi

// 👉 Isliye bugs ka chance badh jata hai


// ✅ Better alternatives:
// unknown (safe)
// proper types (best)

let safeData: unknown

// 👉 unknown use karne pe pehle type check karna padta hai


// ------------------------------------------------------
// 🚀 FINAL TAKEAWAY
// ------------------------------------------------------

// 1. strict mode me null/undefined careful use karo
// 2. union types se flexible bano
// 3. callbacks me "void" = ignore return
// 4. "never" = function kabhi finish nahi hota
// 5. "any" avoid karo — warna TS ka fayda khatam

// 💯 Clean TypeScript = Safe + Predictable Code