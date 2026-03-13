function majStockImperatif(list, id, delta) {
  const res = [];
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    if (p.id === id) res.push({ ...p, stock: p.stock + delta }); else res.push(p);
  }
  return res;
}
const majStockFP = (list, id, delta) => list.map(p => p.id === id ? { ...p, stock: p.stock + delta } : p);
