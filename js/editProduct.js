// // Variables
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId);
console.log("before update", getProduct);
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

document.querySelector("#display_image").innerHTML = ` <img style=" width: 100%;height: 180px;object-fit:cover;" src="${getProduct.imageUrl}" alt="">`;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);

//  Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function updateProductFun(e) {
  e.preventDefault();

  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSizeValue;
  getProduct.imageUrl = productImage;

  console.log("after update", getProduct);

  localStorage.setItem("products", JSON.stringify(products));

  setTimeout(() => {
    window.location = "index.html";
  }, 500);
}

// uploadImage
function uploadImage() {
  let file = this.files[0];
  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image not Exced 2MG");
    return;
  }

  getImageBase64(file);
  // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImage = reader.result;
    document.querySelector("#display_image").innerHTML = ` <img style=" width: 100%;
    height: 180px;object-fit:cover;" src="${productImage}" alt="">`;

  };

  reader.onerror = function () {
    alert("Error !!");
  };
}

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