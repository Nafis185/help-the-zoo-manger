function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const incomeByTicket = ticketPrice * ticketSale;

  const darowanCost = 500;
  const darowanFood = 8 * 50;
  const darowanTotalCost = darowanCost + darowanFood;

  return (perDayIncome = incomeByTicket - darowanTotalCost);
}
const ticketSale = 50;
console.log(perDayIncome);