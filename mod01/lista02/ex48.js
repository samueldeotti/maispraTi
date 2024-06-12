const combineInventories = (inventoryA, inventoryB) => {
  return Object.keys({ ...inventoryA, ...inventoryB })
    .reduce((combinedInventory, item) => {
      combinedInventory[item] = (inventoryA[item] || 0) + (inventoryB[item] || 0);
      return combinedInventory;
    }, {});
};

const inventoryA = {
  apples: 10,
  oranges: 5,
  bananas: 20,
};

const inventoryB = {
  oranges: 10,
  bananas: 15,
  grapes: 10,
};

console.log(combineInventories(inventoryA, inventoryB));
