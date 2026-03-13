const users = [
  { id: 1, prenom: "Lina", nom: "Durand", actif: true, age: 22 },
  { id: 2, prenom: "Amar", nom: "Kaci", actif: false, age: 19 },
  { id: 3, prenom: "Zoé", nom: "Martin", actif: true, age: 27 },
  { id: 4, prenom: "Ali", nom: "Ben", actif: true, age: 17 },
];

const byNomPrenom = (a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);

const actifsAdultes = users.filter(u => u.actif && u.age >= 18).sort(byNomPrenom);
const etiquettes = actifsAdultes.map(u => `${u.nom} ${u.prenom} (${u.age})`);
const ageMoyen = actifsAdultes.reduce((acc, u, i, arr) => acc + u.age / arr.length, 0);

const tranche = age => age < 20 ? "<20" : age < 25 ? "20-24" : "25+";
const groupBy = (arr, keyFn) => arr.reduce((acc, x) => ((acc[keyFn(x)] ||= []).push(x), acc), {});
const groupes = groupBy(actifsAdultes, u => tranche(u.age));

console.log({ actifsAdultes, etiquettes, ageMoyen, groupes });