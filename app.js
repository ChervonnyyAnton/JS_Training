/*
  Имеется массив изменения цен prices, где внутри
  элемент массива является ценои в момент X,
  2й - ценой в момент Y. Нужно преобразовать данные в массив, где будут отображены
  только положительные изменения цен: [100, 150]
*/

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const positivePrices = prices
  .map(product => product[1] - product[0])
  .filter(price => price > 0);

console.log(positivePrices);