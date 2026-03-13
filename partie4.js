const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const trim = s => s.trim();
const upper = s => s.toUpperCase();
const exclam = s => s + "!";

const nettoyer = pipe(trim, upper, exclam);
console.log(nettoyer("  hello  ")); // HELLO!

const add = a => b => a + b; // curry à 2 niveaux
const inc = add(1);
console.log(inc(41)); // 42