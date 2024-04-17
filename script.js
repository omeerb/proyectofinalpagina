const products = [
    { id: 1, name: "Camisa", price: 20, image: "imagenes/camisa.jpg" },
    { id: 2, name: "Pantalón", price: 30, image: "imagenes/pantalon.jpg" },
    { id: 3, name: "Sudadera", price: 25, image: "imagenes/sudadera.jpg" },
    { id: 4, name: "Vestido", price: 40, image: "imagenes/vestido.jpg" },
];

const cartItems = [];

// Función para mostrar los productos en el catálogo
function renderProducts(productsToShow) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Función para buscar productos por nombre
function searchProducts(term) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
    );
    renderProducts(filteredProducts);
}

// Función para actualizar el carrito en el modal
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Eliminar</button></p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cartItems.push(selectedProduct);
    updateCart();
    alert(`¡${selectedProduct.name} ha sido agregado al carrito!`);
    updateCartCount();
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart();
        updateCartCount();
    }
}

// Función para mostrar la cantidad de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length.toString();
}

// Evento al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);

    // Evento para agregar productos al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(btn.getAttribute('data-id'));
            addToCart(productId);
        });
    });

   // Evento para eliminar productos del carrito (Delegación de eventos)
    document.getElementById('cart-items').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });

    // Modal de Carrito
    const modal = document.getElementById('cart-modal');
    const cartBtn = document.getElementById('cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    // Abrir modal al hacer clic en el botón "Carrito"
    cartBtn.onclick = function() {
        modal.style.display = 'block';
    };

    // Cerrar modal al hacer clic en la "X"
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Cerrar modal al hacer clic fuera del área del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Evento para el botón de "Pagar"
    checkoutBtn.addEventListener('click', function() {
        alert('¡Gracias por tu compra!');
        // Limpiar el carrito al pagar
        cartItems.length = 0;
        updateCart();
        updateCartCount();
        modal.style.display = 'none'; // Cerrar el modal después del pago
    });

    // Evento para el botón de búsqueda
    document.getElementById('search-btn').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value;
        searchProducts(searchTerm);
    });

    // Mostrar la cantidad de productos al cargar la página
    updateCartCount();
});
