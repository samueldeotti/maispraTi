const applyFunctionToObject = (obj, func) => {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[key] = func(obj[key]);
    return newObj;
  }, {});
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const doubleValue = (value) => value * 2;

console.log(applyFunctionToObject(obj, doubleValue));
