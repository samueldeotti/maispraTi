const data = {
  name: 'Joao',
  age: 30,
  height: 1.75,
  interests: ['reading', 'traveling'],
  address: {
    street: 'Street A',
    city: 'City X',
  },
  numbers: [1, 2, 3, 4],
  status: 'active',
};

const filterArrays = (object) => {
  return Object.keys(object).reduce((newObject, key) => {
    if (Array.isArray(object[key])) newObject[key] = object[key];
    return newObject;
  }, {});
};

console.log(filterArrays(data));
