const assoc = (obj, key, val) => ({ ...obj, [key]: val });
const dissoc = (obj, key) => { const { [key]: _, ...rest } = obj; return rest; };

const user = { id: 1, nom: "Lina", ville: "Paris" };
const user2 = assoc(user, "ville", "Lyon");
const user3 = dissoc(user2, "ville");
console.log({ user, user2, user3 });

const isNonEmptyStr = s => typeof s === "string" && s.trim().length > 0;
const isPositive = n => typeof n === "number" && n > 0;
console.log(isNonEmptyStr("  ok "), isPositive(3));