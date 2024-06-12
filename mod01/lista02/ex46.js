const summarizeSales = (sales) => {
  return sales.reduce((summary, sale) => {
    const { vendedor, valor } = sale;
    summary[vendedor] = (summary[vendedor] || 0) + valor;
    return summary;
  }, {});
};

const sales = [
  { vendedor: 'John', valor: 100 },
  { vendedor: 'Jane', valor: 200 },
  { vendedor: 'John', valor: 150 },
  { vendedor: 'Jane', valor: 300 },
  { vendedor: 'John', valor: 200 },
];

console.log(summarizeSales(sales));
