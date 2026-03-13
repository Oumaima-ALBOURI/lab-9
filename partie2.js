const nums = [1, 2, 3, 4, 5, 6];
const carres = nums.map(n => n * n);
const pairs = nums.filter(n => n % 2 === 0);
const somme = nums.reduce((acc, n) => acc + n, 0);
console.log({ carres, pairs, somme });

const premierPair = nums.find(n => n % 2 === 0);
const aSup5 = nums.some(n => n > 5);
const tousPositifs = nums.every(n => n > 0);
console.log({ premierPair, aSup5, tousPositifs });

const mots = ["zèbre", "Arbre", "avion", "Banane"];
const triCI = [...mots].sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
console.log({ mots, triCI }); // `mots` original reste intact