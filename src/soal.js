function soal1(number) {
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] < number[j]) {
        const temp = number[i];
        number[i] = number[j];
        number[j] = temp;
      }
    }
  }
  console.log(number)
  return number;
}

function soal2(number, range) {
  const maxSubarraysCount = number.length - range + 1;
  let count = 0;
  let temp = 0;

  if (!range) return;

  for (let i = 0; i < maxSubarraysCount; i++) {
    let subarray = number.slice(i, i + range);
    temp = subarray.reduce((a, b) => a + b, 0);
    if (temp > count) count = temp;
  }

  return count;
}

function soal3(obj) {
  // console.log(obj)
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += soal3(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

function sum(a, b) {
  return a + b;
}

export { soal1, soal2, soal3, sum };
