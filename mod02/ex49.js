const categorizeTransactions = (transactions) => {
  return transactions.reduce((result, transaction) => {
    const { category, value } = transaction;

    if (!result[category]) {
      result[category] = {
        transactions: [],
        subtotal: 0,
      };
    }

    result[category].transactions.push(transaction);
    result[category].subtotal += value;

    return result;
  }, {});
};

const transactions = [
  { id: 1, value: 100, data: '2024-01-01', category: 'food' },
  { id: 2, value: 200, data: '2024-01-02', category: 'travel' },
  { id: 3, value: 50, data: '2024-01-03', category: 'food' },
  { id: 4, value: 150, data: '2024-01-04', category: 'shopping' },
  { id: 5, value: 300, data: '2024-01-05', category: 'travel' },
];

console.log(categorizeTransactions(transactions));
