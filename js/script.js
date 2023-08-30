// Define Product
let productsDom = document.querySelector(".products");
let products = productsDB;

// Display Producs
let drawProductsUI;
(drawProductsUI = function(products = []) {
    let productsUI = products.map((item) => {
        return `
      <div class="product-item" style="border: ${item.isMe === "Y" ? "" : ""}">
        <img
          src="${item.imageUrl}"
          class="product-item-img"
          alt="image"
        />
        <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title}</a>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span>
          ${
            item.isMe === "Y"
              ? "<button class='edit-product' onclick='editProduct(" +
                item.id +
                ")'> <i class='far fa-edit'></i> </button>"
              : ""
          }
        </div>
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="addedToCart(${
            item.id
          })">Add To Cart</button>
          <i class="favorite fa fa-heart" style="color: ${
            item.liked == true ? "red" : ""
          }" onclick="addToFavorite(${item.id})"></i>
        </div>
      </div>
    `;
    });

    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// Add To cart
function addedToCart(id) {
    if (localStorage.getItem("username")) {
        let productss = JSON.parse(localStorage.getItem("products")) || products;
        let product = productss.find((item) => item.id === id);
        let isProductInCart = addedItem.some((i) => i.id === product.id);

        if (isProductInCart) {
            addedItem = addedItem.map((p) => {
                if (p.id === product.id) p.qty += 1;
                return p;
            });
        } else {
            addedItem.push(product);
        }
        // UI
        cartProductDivDom.innerHTML = "";
        addedItem.forEach((item) => {
            cartProductDivDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
        });

        // Save Data
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));

        // Add counter of Items
        let cartProductItems = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    } else {
        window.location = "login.html";
    }
}

function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);

    return unique;
}

function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "cartDetails.html";
}

// search function
let input = document.getElementById("search");

input.addEventListener("keyup", function(e) {
    search(
        e.target.value,
        JSON.parse(localStorage.getItem("products")) || products
    );

    if (e.target.value.trim() === "")
        drawProductsUI(JSON.parse(localStorage.getItem("products")));
});

function search(title, myArray) {
    let arr = myArray.filter(
        (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    );
    drawProductsUI(arr);
}

// Add To Favorite
let favoritesItems = localStorage.getItem("productsFavorite") ?
    JSON.parse(localStorage.getItem("productsFavorite")) :
    [];

function addToFavorite(id) {
    if (localStorage.getItem("username")) {
        let productss = JSON.parse(localStorage.getItem("products")) || products;
        let product = productss.find((item) => item.id === id);
        let isProductInCart = favoritesItems.some((i) => i.id === product.id);
        // product.liked = true;
        if (!isProductInCart) {
            favoritesItems.push(product);
            alert(`you added ${product.title} to favourite`);
            favoritesItems.map((item) => {
                if (item.id === product.id) {
                    item.liked = true;
                }
            });
        } else {
            favoritesItems.pop(product);
            product.liked = false;
            alert(`you poped ${product.title} from favorite`);
        }

        localStorage.setItem("productsFavorite", JSON.stringify(favoritesItems));
        localStorage.setItem("products", JSON.stringify(products));
        drawProductsUI(products);
    } else {
        window.location = "login.html";
    }
}

// Filter Products By Size
let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getProductsFilteredBySize);

function getProductsFilteredBySize(e) {
    let val = e.target.value;
    let productes = JSON.parse(localStorage.getItem("products")) || products;

    if (val === "all") {
        drawProductsUI(productes);
    } else {
        productes = productes.filter((i) => i.size === val);
        drawProductsUI(productes);
    }
}

// Edit Product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}
// swiper
let swiperDiv = document.querySelector(".swiper-wrapper");
let swiperSlider = document.querySelector(".image-slider");
products.map((item) => {
    swiperDiv.innerHTML += `<div class="swiper-slide"><img src="${item.imageUrl}" alt=""></div>`;
});

const swiper = new Swiper(swiperSlider, {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

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