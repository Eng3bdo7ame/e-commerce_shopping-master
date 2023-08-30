let productsDom = document.querySelector(".big_product");
let noProductsDom = document.querySelector(".noProducts");

function drawCartProductsUI(allProducts = []) {
    if (JSON.parse(localStorage.getItem("productsInCart")).length === 0)
        noProductsDom.innerHTML = "There is no items !!";

    let big_product =
        JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUI = big_product.map((item) => {
        return `
        <div class="col-4">
            <div class="col-4">
            <img
                src="${item.imageUrl}"
                class="product-item-img"
                alt="image"
            />
    
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span> Size: ${item.size} </span> <br>
                <span> Quntatit: ${item.qty} </span>
            </div>
    
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
            </div>
            </div>
        </div>
      `;
    });

    productsDom.innerHTML = productsUI.join("");
}

drawCartProductsUI();

function removeItemFromCart(id) {
    let productsInCart = localStorage.getItem("productsInCart");
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems);
    }
}
// to top
let toTop = document.getElementById("top");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
toTop.addEventListener("click", () => {
    topFunction();
});
// navbar list
let nlist = document.querySelector(".icon");
let nlistItems = document.querySelector("#user_info");
let thcond = document.querySelector("#thcond");
nlistItems.style.display = "none";
nlist.addEventListener("click", () => {
    if (nlistItems.style.display == "block") {
        nlistItems.style.display = "none";
        thcond.style = " width: 60%; transition: 0.3s";
    } else {
        nlistItems.style.display = "block";
        thcond.style = " width: 100%; transition: 0.3s";
    }
});