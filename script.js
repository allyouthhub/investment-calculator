function getCurrencySymbol(currency) {
  const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥"
  };
  return symbols[currency] || "$";
}

function calculateInvestment() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseFloat(document.getElementById("years").value);
  const compound = parseInt(document.getElementById("compound").value);
  const currency = document.getElementById("currency").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(compound)) {
    resultDiv.textContent = "Please fill in all fields correctly.";
    return;
  }

  const r = rate / 100;
  const amount = principal * Math.pow((1 + r / compound), compound * years);
  const total = amount.toFixed(2);
  const gain = (amount - principal).toFixed(2);
  const symbol = getCurrencySymbol(currency);

  resultDiv.innerHTML = `
    <p>Final Amount: <strong>${symbol}${total}</strong></p>
    <p>Total Interest Earned: <strong>${symbol}${gain}</strong></p>
  `;
}
