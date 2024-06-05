const firstName = localStorage.getItem("firstName");
const secondName = localStorage.getItem("secondName");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const confirmPassword = localStorage.getItem("confirmPassword");
const inpMail = document.getElementById("email");
const inpPass = document.getElementById("password");
const logForm = document.getElementById("login");
const errMsg = document.getElementById("message");
const visible = document.getElementById("eye");
var visibleNum = 0;

// Make Password Visible on Click
function passVisible() {
  if (visibleNum == 0) {
    visible.className = "fa-solid fa-eye";
    inpPass.type = "text";
    visibleNum = 1;
  } else if (visibleNum == 1) {
    visible.className = "fa-solid fa-eye-slash";
    inpPass.type = "password";
    visibleNum = 0;
  }
}

// Authorizing for email and password
function authoInfo() {
  const inpMailVal = inpMail.value.trim();
  const inpPassVal = inpPass.value
    .trim()
    .split("")
    .join("$")
    .split(" ")
    .join("--");
  let isAuthorized = true;

  // Validating if email is filled or not
  if (inpMailVal == "") {
    inpMail.placeholder = "Email can't be blank";
    inpMail.style.border = "1px solid red";
    isAuthorized = false;
  } else {
    inpMail.style.border = "1px solid #42b72a";
    inpMail.style.borderBottom = "2px solid #42b72a";
  }

  // Validating if password is filled or not
  if (inpPassVal == "") {
    inpPass.placeholder = "Password can't be blank";
    inpPass.style.border = "1px solid red";
    isAuthorized = false;
  } else {
    inpPass.style.border = "1px solid #42b72a";
    inpPass.style.borderBottom = "2px solid #42b72a";
  }

  // Making sure to redirect to Facebook home page after authorization
  if (isAuthorized) {
    if (inpMailVal != email || inpPassVal != password) {
      inpMail.style.border = "1px solid red";
      inpPass.style.border = "1px solid red";
      errMsg.style.display = "block";
    } else if (inpMailVal == email && inpPassVal == password) {
      inpMail.style.border = "1px solid #42b72a";
      inpMail.style.borderBottom = "2px solid #42b72a";
      inpPass.style.border = "1px solid #42b72a";
      inpPass.style.borderBottom = "2px solid #42b72a";
      window.location.href = "fbHome.html";
    } else {
      console.log("Authorization Incomplete");
    }
  }
}

logForm.addEventListener("submit", (event) => {
  event.preventDefault();
  authoInfo();
});

visible.addEventListener("click", passVisible);
