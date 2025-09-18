// Example: Update BTC price dynamically (placeholder for real API integration)
document.addEventListener('DOMContentLoaded', () => {
  const btcSpan = document.querySelector('[data-btc-price]');
  if (btcSpan) {
    // Simulate fetching price - replace with real API call in production
    setTimeout(() => {
      btcSpan.textContent = '$63,550';
    }, 2500);
  }
});