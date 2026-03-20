// Without as const
const config = {
  role: "admin",
  level: 1
};
// Inferred as: { role: string, level: number }
// role and level are mutable!

// With as const
const config1 = {
  role: "admin",
  level: 1
} as const;
// Inferred as: { readonly role: "admin", readonly level: 1 }
// Literal types + deeply readonly

/*
Exactly, you've got it. Let me just state it cleanly:

**`const`**
- Primitive → infers exact literal (`"admin"`, `1`, `true`) ✅
- Object/Array → infers generic types (`string`, `number`) and only locks the *reference*, not the contents ⚠️

**`as const`**
- Primitive → same as `const`, infers exact literal ✅
- Object/Array → infers exact literals AND makes everything `readonly` ✅

---

One line summary:

> `const` = "this variable won't be reassigned"
>
> `as const` = "this variable AND everything inside it won't change"

That's the complete picture.
 */