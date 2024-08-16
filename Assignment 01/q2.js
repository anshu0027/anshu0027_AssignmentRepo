// Question - 02
function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});
}

// Convert result to array of objects
function formatResult(totalSpent) {
  return Object.entries(totalSpent).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

const transactions = [
  { category: "groceries", price: 30 },
  { category: "electronics", price: 200 },
  { category: "groceries", price: 45 },
  { category: "clothing", price: 100 },
  { category: "electronics", price: 150 },
];

const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
const result = formatResult(totalSpentByCategory);

console.log(result);
