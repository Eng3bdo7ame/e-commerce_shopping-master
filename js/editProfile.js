// Get Data form LocalStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Variables
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Setting Values of Input
userInput.value = get_user;
userEmailInput.value = get_email;

// Events
editForm.addEventListener("submit", editProfileData);

function editProfileData(e) {
  e.preventDefault();

  localStorage.setItem("username", userInput.value);
  localStorage.setItem("email", userEmailInput.value);

  setTimeout(() => {
    window.location = "profile.html";
  }, 500);
}
// before up date image
let imgeBefore=localStorage.getItem("profileImageUrl") ; 
document.querySelector("#display_image").innerHTML = ` <img style=" width: 100%;
height: 180px;object-fit:cover;" src="${imgeBefore}" alt="">`;

let inputFile = document.getElementById("upload-image-file");
inputFile.addEventListener("change", uploadImage);
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
        height: 180px;object-fit:cover;" src="${reader.result}" alt="">`;
 localStorage.setItem("profileImageUrl",productImage); 
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