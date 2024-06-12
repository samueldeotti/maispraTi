const prompt = require('prompt-sync')();

const validateTime = (time) => {
  const regex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
  return regex.test(time);
};

const readTimes = () => {
  const times = [];
  let i = 0;

  while (i < 5) {
    const time = prompt(`Enter time ${i + 1} in the format HH:MM:SS:`);
    if (validateTime(time)) {
      times.push(time);
      i++;
    } else {
      console.log('Invalid time. Please enter in the correct format (HH:MM:SS).');
    }
  }

  return times;
};

const writeTimes = (times) => {
  console.log('Valid times in the format HH:MM:SS:');
  times.forEach((time, index) => {
    console.log(`Time ${index + 1}: ${time}`);
  });
};

const times = readTimes();
writeTimes(times);
