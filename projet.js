// Immutabilité arrays/objets
const ajouter = (arr, x) => [...arr, x];
const retirerIndex = (arr, i) => [...arr.slice(0, i), ...arr.slice(i+1)];
const assoc = (obj, k, v) => ({ ...obj, [k]: v });
const dissoc = (obj, k) => { const { [k]:_, ...r } = obj; return r; };

// Méthodes d’array
const carres = [1,2,3].map(n => n*n);
const pairs = [1,2,3,4,5,6].filter(n => n%2===0);
const somme = [1,2,3].reduce((a,n)=>a+n,0);

// Composition & currying
const pipe = (...fns) => x => fns.reduce((v,f)=>f(v), x);
const compose = (...fns) => x => fns.reduceRight((v,f)=>f(v), x);
const add = a => b => a + b;

// Cas pratiques produits
const rechercher = (items, q) => { const s=q.trim().toLowerCase(); if(!s) return []; return items.filter(p=>p.nom.toLowerCase().includes(s)||p.cat.toLowerCase().includes(s)); };
const valeurStock = arr => arr.reduce((acc,p)=>acc+p.prix*p.stock,0);

// Mini‑projet users
const byNomPrenom = (a,b) => a.nom.localeCompare(b.nom)||a.prenom.localeCompare(b.prenom);
const tranche = age => age<20?"<20":age<25?"20-24":"25+";
const groupBy = (arr, keyFn) => arr.reduce((acc,x)=>((acc[keyFn(x)] ||= []).push(x), acc),{});

// Safeguards
const get = (obj, path, def) => path.split('.').reduce((acc,k)=>acc?.[k], obj) ?? def;