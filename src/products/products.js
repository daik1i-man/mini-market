const root = document.getElementById("products-root");

fetch("https://fakestoreapi.com/products")
    .then(r => r.json())
    .then(render);

function render(products) {
    const productsLayout = document.createElement("div");
    productsLayout.id = "products-layout";

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-component";
        card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>${p.price} $</p>
      <button>Add to cart</button>
    `;

        card.querySelector("button").onclick = () => {
            window.dispatchEvent(
                new CustomEvent("add-to-cart", { detail: p })
            );

            handleAddCart(p);
        };


        productsLayout.appendChild(card);
    });

    root.appendChild(productsLayout);
}

function handleAddCart(product) {
    const cartProducts = JSON.parse(localStorage.getItem('cart-products')) || [];

    const exist = cartProducts.findIndex(item => item.id === product.id);

    if (exist !== -1) {
        cartProducts[exist].quantity += 1;
    } else {
        cartProducts.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
}