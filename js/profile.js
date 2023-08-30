// Get Data form LocalStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.isMe === "Y");
// Variables
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if (myProducts.length != 0) {
  productsLength.innerHTML = myProducts.length;
} else {
  productsLength.remove();
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
// avatar image
let img = document.querySelector(".user-avatar");
let src = localStorage.getItem("profileImageUrl");
img.setAttribute("src",src);