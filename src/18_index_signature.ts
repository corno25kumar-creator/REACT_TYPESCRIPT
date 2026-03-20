type vari = {[key:string]:number}
const count :vari = {}

count["like"] = 0;
count["shear"] = 0;
count["comments"] = 0;

console.log(count)

type metrics = Record<"like"|"shear"|"comments", number>  // safer
const mm : metrics = {like:2, comments:3, shear:3}

const prices = new Map<string, number>()
prices.set("like", 1)