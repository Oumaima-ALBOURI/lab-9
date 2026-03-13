let compteur = 0;
function incrementerImpur() { compteur++; }

// Pure: prend une valeur, retourne une nouvelle valeur
const incrementerPur = x => x + 1;

// Tests
incrementerImpur();
console.log("compteur (impur):", compteur);
console.log("incrementerPur(5):", incrementerPur(5));

const ajouter = (arr, x) => [...arr, x];
const retirerIndex = (arr, i) => [...arr.slice(0, i), ...arr.slice(i + 1)];

const a = [1,2,3];
const b = ajouter(a, 4); // [1,2,3,4]
const c = retirerIndex(b, 1); // [1,3,4]
console.log({ a, b, c }); // a reste inchangé