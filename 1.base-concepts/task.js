"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - 4 * a * c;
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let fractionalMonthlyRate = percent / 1200;
  let loanPrincipal = amount - contribution;
  let totalCreditAmount = 0;
  let mounthlyPayment = 0;
  for (let i = 0; i < countMonths; i++) {
    mounthlyPayment = loanPrincipal * (fractionalMonthlyRate + (fractionalMonthlyRate / (((1 + fractionalMonthlyRate) ** countMonths) - 1)));
    totalCreditAmount += mounthlyPayment;
  }
  return Math.round(totalCreditAmount * 100) / 100;
}