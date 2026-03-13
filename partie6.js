const produits = [
  { id: 1, nom: "Stylo", cat: "Bureau", prix: 1.2, stock: 50 },
  { id: 2, nom: "Cahier", cat: "Bureau", prix: 2.5, stock: 0 },
  { id: 3, nom: "Clavier", cat: "Informatique", prix: 29.9, stock: 10 },
  { id: 4, nom: "Souris", cat: "Informatique", prix: 19.9, stock: 5 },
];

const dispoTries = produits
  .filter(p => p.stock > 0)
  .sort((a, b) => a.cat.localeCompare(b.cat) || a.nom.localeCompare(b.nom));
console.log(dispoTries);

const rechercher = (items, q) => {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return items.filter(p => p.nom.toLowerCase().includes(s) || p.cat.toLowerCase().includes(s));
};
console.log(rechercher(produits, "info"));

const valeurStock = produits.reduce((acc, p) => acc + p.prix * p.stock, 0);
const parCategorie = produits.reduce((acc, p) => ((acc[p.cat] ||= []).push(p), acc), {});
console.log({ valeurStock, parCategorie });