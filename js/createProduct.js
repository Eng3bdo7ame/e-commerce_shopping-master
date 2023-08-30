// Variables

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);

// Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFun(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;

  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      qty: 1,
      imageUrl: productImage,
      size: productSizeValue,
      title: nameValue,
      desc: descValue,
      isMe: "Y",
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";

    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("Enter Data ..");
  }
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