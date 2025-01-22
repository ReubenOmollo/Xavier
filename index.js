let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCount = document.getElementById('cart');

    // Clear previous cart items
    cartItems.innerHTML = '';

    // Add new cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Update cart count
    cartCount.textContent = `Cart (${cart.length})`;
}

function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
}
