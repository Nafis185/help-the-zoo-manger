function calculateMoney(ticketSale){
   
   
      const ticketPrice = 120;
      const incomeByTicket = ticketPrice * ticketSale;
    
      const darowanCost = 500;
      const darowanFood = 8 * 50;
      const darowanTotalCost = darowanCost + darowanFood ;

     
    return perDayIncome = incomeByTicket - darowanTotalCost;
    
}




function checkName(names) {
  const lastLetters = ["a", "y", "i", "e", "o", "u", "w"];
  const letters = names.charAt(names.length - 1);

  if (lastLetters.includes(letters)) {
    return "Bad Name";
  } else {
    return "Good Name";
  }
}




function deleteInvalids(inputArr) {
  return inputArr.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
}




function password(inputs) {
  const { name, birthYear, siteName } = inputs;
  return `${siteName}#${name}@${birthYear}`;
}




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



