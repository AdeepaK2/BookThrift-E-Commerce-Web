
function updateCartTotal() {

    const cartItems = document.querySelectorAll('.cart-item');
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        // Get the quantity of the current item (e.g. "x5")
        const quantityText = item.querySelector('h2 span:nth-child(2)').innerText;
        const quantity = parseInt(quantityText.replace('x', ''), 10);


        const priceText = item.querySelector('p').innerText;
        const price = parseFloat(priceText.replace('LKR', '').trim());


        totalItems += quantity;
        totalPrice += price * quantity;
    });


    const totalProductsElement = document.querySelector('.flex.justify-between.items-center p.text-lg');
    const totalPriceElement = document.querySelector('.flex.justify-between.items-center p.text-xl');

    if (totalProductsElement && totalPriceElement) {
        totalProductsElement.innerText = `${totalItems} Products`;
        totalPriceElement.innerText = `LKR ${totalPrice.toFixed(2)}`;
    }
}

// Listen for clicks on the cross button
document.addEventListener('click', function (event) {
    // Check if the clicked element is a cross button
    if (event.target.closest('.remove-item-btn')) {
        const cartItem = event.target.closest('.cart-item');
        if (cartItem) {

            cartItem.remove();

            updateCartTotal();
        }
    }
});
