const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('ham-links')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')

})


// Get the modal
var modal = document.getElementById('id01');
var blur = document.getElementById('blur');
function openmodal(){
  modal.style.display="block";
  blur.style.filter="blur(10px)";
  blur.style.background="#000"
  blur.style.opacity="0.7"
}


// Close button
function closebtn(){
  modal.style.display="none";
  blur.style.filter="none";
  blur.style.background="none"
  blur.style.opacity="1"
}


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




// Sign up validation
const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function validate(){
  if(uname.value.trim()==""){
    uname.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-user').style.visibility="visible";
    return false;
  }
  else if(email.value.trim()==""){
    email.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-email').style.visibility="visible";
    return false;
  }
  else if(phone.value.trim()==""){
    phone.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-num').style.visibility="visible";
    return false;
  }
  else if(password.value.trim()==""){
    password.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-pw').style.visibility="visible";
    return false;
  }
  else if(password.value.trim().length<5){
    password.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-pw').style.visibility="visible";
    return false;
  }
  else if(repassword.value.trim()==""){
    repassword.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-repw').style.visibility="visible";
    return false;
  }
  else if(repassword.value.trim()!=password.value.trim()){
    repassword.style.border = "solid 3px #e74c3c";
    document.getElementById('invalid-repw').style.visibility="visible";
    return false;
  }
  else{
    return true;
  }
}