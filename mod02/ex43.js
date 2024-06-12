const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);
