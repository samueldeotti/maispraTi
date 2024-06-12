const countStringProperties = (obj) => {
  return Object.values(obj)
    .reduce((count, value) => (typeof value === 'string' ? count + 1 : count), 0);
};

const obj = {
  name: 'João',
  age: 30,
  city: 'New York',
  job: 'Engineer',
};

console.log(countStringProperties(obj));
