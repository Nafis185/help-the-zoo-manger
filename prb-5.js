function monthlySavings(cost, livingexpense) {
  if (Array.isArray(cost) === true && typeof livingexpense === "number") {
    let sum = 0;
    for (let i = 0; i < cost.length; i++) {
      const singlePay = cost[i];
      if (singlePay >= 3000) {
        const afterTax = singlePay - (singlePay * 20) / 100;
        sum = sum + afterTax;
      } else {
        sum = sum + singlePay;
      }
    }
    const savings = sum - livingexpense;
    if (savings < 0) {
      return "earn more";
    } else {
      return savings;
    }
  } else {
    return "invalid input";
  }
}
  
const allPayments = [900, 2700, 3400]; 
const livingexpense = 1000; 

const result = monthlySavings(allPayments, livingexpense);
console.log(result);