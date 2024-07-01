document.addEventListener('DOMContentLoaded', function() {
    const benzinPrice = document.getElementById('benzin-price');
    const dizelPrice = document.getElementById('dizel-price');
    const lpgPrice = document.getElementById('lpg-price');

    function getRandomPrice(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    function updatePrices() {
        benzinPrice.textContent = getRandomPrice(70, 80) + ' TL/Litre';
        dizelPrice.textContent = getRandomPrice(70, 80) + ' TL/Litre';
        lpgPrice.textContent = getRandomPrice(70, 80) + ' TL/Litre';
    }

    updatePrices(); // Initial price update
    setInterval(updatePrices, 300000); // Update every 5 minutes (300000 milliseconds)
});
