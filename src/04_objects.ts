// ======================================================
// 📘 TypeScript + React Data Modeling (Hinglish Notes)
// ======================================================


// ------------------------------------------------------
// ✅ 1. User Type (Model / Shape of Data)
// ------------------------------------------------------

type User = {
    id: string            // 👉 required prop (must)
    name: string          // 👉 required prop (must)
    email?: string        // 👉 optional prop (ho bhi sakta hai, nahi bhi)
    readonly creatAt: Date // 👉 readonly (change nahi kar sakte)
}


// 🧠 Explanation:

// 👉 Required props:
// id, name → ye missing hue to error aayega

// 👉 Optional (?):
// email ho bhi sakta hai ya nahi
// React me useful (API data incomplete hota hai)

// 👉 readonly:
// ek baar set ho gaya → modify nahi kar sakte

// ❌ Example:
// user.creatAt = new Date() → error


// ------------------------------------------------------
// ✅ Usage
// ------------------------------------------------------

const user1: User = {
  id: "vevwd",
  name: "sam",
  creatAt: new Date()
}


// ❌ Error case (missing required prop)

// const user2: User = {
//   id: "vevwd",
//   creatAt: new Date()
// }

// 👉 Error: Property 'name' is missing


// ------------------------------------------------------
// ⚛️ React me use (concept)
// ------------------------------------------------------

// 👉 Props typing ke liye use hota hai

// type UserProps = {
//   user: User
// }

// function UserCard({ user }: UserProps) {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       {user.email && <p>{user.email}</p>}
//     </div>
//   )
// }

// 👉 Optional email safely handle kiya
// 👉 Type safety milti hai


// ------------------------------------------------------
// ✅ 2. Optional vs string | undefined
// ------------------------------------------------------

type User2 = {
  name: string
  email?: string
}

type User3 = {
  name: string
  email: string | undefined
}


// 🧠 Difference:

// email?:
// 👉 property exist kare ya na kare (optional)

// email: string | undefined:
// 👉 property hamesha hogi
// 👉 value undefined ho sakti hai


// Example:

const u1: User2 = { name: "sam" } // ✅ ok

// const u2: User3 = { name: "sam" } // ❌ error
// 👉 email likhna padega (even undefined ho to bhi)


// ------------------------------------------------------
// ⚛️ React intuition
// ------------------------------------------------------

// user.email && <p>{user.email}</p>
// 👉 optional props ke liye best pattern


// ------------------------------------------------------
// ✅ 3. Index Signature (Dynamic Keys)
// ------------------------------------------------------

type count = { [k: string]: number }


// 🧠 Meaning:
// - key kuch bhi ho sakta hai
// - value hamesha number

const c1: count = { my_var: 2 }


// 👉 Use case:
// dynamic data (API, IDs, etc)


// ------------------------------------------------------
// ✅ 4. Record (Better structured version)
// ------------------------------------------------------

type count1 = Record<"likes" | "view" | "shears", number>

const c2: count1 = {
  likes: 1,
  view: 2,
  shears: 2
}


// 🧠 Meaning:
// - keys fixed hain
// - values number honge


// ------------------------------------------------------
// 🔥 Index vs Record
// ------------------------------------------------------

// Index Signature:
// 👉 keys unknown
// 👉 flexible but less safe

// Record:
// 👉 keys predefined
// 👉 more safe + no typos


// ------------------------------------------------------
// ⚛️ React use case (concept)
// ------------------------------------------------------

type Stats = Record<"likes" | "views", number>

// type Props = {
//   stats: Stats
// }

// function StatsCard({ stats }: Props) {
//   return (
//     <div>
//       <p>Likes: {stats.likes}</p>
//       <p>Views: {stats.views}</p>
//     </div>
//   )
// }

// 👉 Safe access
// 👉 No typo mistakes
// 👉 Predictable UI


// ------------------------------------------------------
// 🧠 FINAL MENTAL MODEL
// ------------------------------------------------------

// 👉 TypeScript types = data ka blueprint

// 1. type User → API data ka structure
// 2. ? → optional fields
// 3. readonly → immutable data
// 4. Record → fixed structure
// 5. [key: string] → dynamic structure


// ------------------------------------------------------
// 🚀 Real-world flow
// ------------------------------------------------------

// 1. API se data aata hai
// 2. Tum type define karte ho
// 3. Props me use karte ho
// 4. UI safely render hota hai


// ------------------------------------------------------
// 💯 FINAL TAKEAWAY
// ------------------------------------------------------

// 👉 "TypeScript = bugs kam + code predictable"

// 👉 Rule:
// - Known structure → use Record
// - Unknown structure → use index signature
// - Optional data → use ?
// - Immutable data → use readonly

// 🔥 Clean types = clean React apps