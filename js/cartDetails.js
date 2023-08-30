let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="" />
<h2 style="margin: 1px 10px"> ${productDetails.title} </h2>
<p style="margin: 1px 10px"> ${productDetails.desc} </p>
<span>Size : ${productDetails.size}</span><br>
<span>Qantatiy : ${productDetails.qty}</span><br>
<button style=" 
 display: block;
border: none;
padding: 10px 15px;
cursor: pointer;
border-radius: 13px 0 37px 0px;
font-size: 20px;
position: absolute;
bottom: 0;
width: 61px;
right: 0;
" onclick="editProduct(${productId})"><i class='far fa-edit'></i> </button>
`;

// Edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
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