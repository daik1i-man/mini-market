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
      <p>$${p.price}</p>
      <button>Savatga qo'shish</button>
    `;

        card.querySelector("button").onclick = () => {
            window.dispatchEvent(
                new CustomEvent("add-to-cart", { detail: p })
            );
        };

        productsLayout.appendChild(card);
    });

    root.appendChild(productsLayout);
}