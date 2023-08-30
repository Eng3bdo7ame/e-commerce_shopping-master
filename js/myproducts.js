let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

// Display Producs
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length != 0) {
    let productsUI = myProducts.map((item) => {
      return `
      <div class="product-item" style="border: ${
        item.isMe === "Y" ? "" : ""
      }">
        <img
          src="${item.imageUrl}"
          class="product-item-img"
          alt="image"
        />

        <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title}</a>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span>

          <button class='edit-product' style="margin-bottom: -24px;" onclick='editProduct(" +
          item.id +
          ")'> <i class='far fa-edit'></i> </button>
          <br>
          <button class='delete-product' onclick='deleteProduct(${
            item.id
          })'> <i class='far fa-trash-alt'></i> </button>
        </div>
      </div>
    `;
    });

    productsDom.innerHTML = productsUI.join("");
  } else {
    noProductsDom.innerHTML = "No Products !!";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filtered = myProducts.filter((i) => i.id !== id);

  let clickedItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drawProductsUI(filtered);
}
// to top
let toTop=document.getElementById("top");
window.onscroll=function () {
  scrollFunction();
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop>20 ) {
    toTop.style.display="block";
  }else{
    toTop.style.display="none";
   }
}
function topFunction() {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
toTop.addEventListener("click",()=>{
  topFunction();
})
// navbar list
let nlist=document.querySelector(".icon");
let nlistItems=document.querySelector("#user_info");
let thcond=document.querySelector("#thcond");
nlistItems.style.display="none";
nlist.addEventListener("click",()=>{
if( nlistItems.style.display=="block"){
  nlistItems.style.display="none";
  thcond.style=" width: 60%; transition: 0.3s"
}else{
  nlistItems.style.display="block";
  thcond.style=" width: 100%; transition: 0.3s"

}
})