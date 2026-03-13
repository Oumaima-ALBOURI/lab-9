const multiplierPar = facteur => x => x * facteur;
const fois3 = multiplierPar(3);
console.log(fois3(10)); // 30

const curry2 = fn => a => b => fn(a, b);
const somme2 = curry2((a, b) => a + b);
console.log(somme2(2)(5)); // 7