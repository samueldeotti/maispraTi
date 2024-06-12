const countOccurrences = (arr) => {
  return arr.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
};

const strings = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
console.log(countOccurrences(strings));
