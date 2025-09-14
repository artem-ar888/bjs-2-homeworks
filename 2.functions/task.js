"use strict"

function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sumArr = arr.reduce((acc, current) => acc + current, 0);
  const avg = Number((sumArr / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function checkArrayIsNotEmpty(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

function summElementsWorker(...arr) {
  if (!checkArrayIsNotEmpty(arr)) {
    return 0;
  }
  return arr.reduce((acc, current) => acc + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!checkArrayIsNotEmpty(arr)) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!checkArrayIsNotEmpty(arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) ? sumEvenElement += arr[i]: sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!checkArrayIsNotEmpty(arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return Number((sumEvenElement / countEvenElement).toFixed(3));
}

function makeWork (arrOfArr, func) {
  if (typeof func !== 'function') {
    throw new TypeError('The parameter must be a function!');
  }
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}