// Get all the prices listed in the HTML table
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the sum of all prices
let totalPrice = 0;
prices.forEach(price => {
  totalPrice += parseFloat(price.textContent);
});

// Create a new row in the HTML table to display the total price
const table = document.querySelector('table');
const newRow = table.insertRow();
const newCell = newRow.insertCell();
newCell.setAttribute('data-ns-test', 'grandTotal');
newCell.textContent = totalPrice.toFixed(2);
