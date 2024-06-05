const fName = document.getElementById("frstName");
const sName = document.getElementById("surName");
const emal = document.getElementById("email");
const pass = document.getElementById("password");
const cPass = document.getElementById("cPassword");
const form = document.getElementById("signIn");
const visible = document.getElementById("eye");
var visibleNum = 0;

// Checking info is saved correctly or not
/* function checkSavedUserInfo() {
  const firstName = localStorage.getItem("firstName");
  const secondName = localStorage.getItem("secondName");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const confirmPassword = localStorage.getItem("confirmPassword");

  console.log("Saved User Information:");
  console.log("First Name:", firstName);
  console.log("Second Name:", secondName);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);
} */

// Make Password Visible on Click
function passVisible() {
  if (visibleNum == 0) {
    visible.className = "fa-solid fa-eye";
    pass.type = "text";
    cPass.type = "text";
    visibleNum = 1;
  } else if (visibleNum == 1) {
    visible.className = "fa-solid fa-eye-slash";
    pass.type = "password";
    cPass.type = "password";
    visibleNum = 0;
  }
}

// For Saving user infromation to local file
function saveUserInfo() {
  const fNameVal = fName.value.trim();
  const sNameVal = sName.value.trim();
  const emalVal = emal.value.trim();
  const passVal = pass.value.trim().split("").join("$").split(" ").join("--");
  const cPassVal = cPass.value.trim().split("").join("$").split(" ").join("--");

  const firstName = localStorage.setItem("firstName", fNameVal);
  const secondName = localStorage.setItem("secondName", sNameVal);
  const email = localStorage.setItem("email", emalVal);
  const password = localStorage.setItem("password", passVal);
  const confirmPassword = localStorage.setItem("confirmPassword", cPassVal);

  console.log("saveUserInfo runned sucessfully ");
}

// Validating form before saving the data
function validate() {
  const fNameVal = fName.value.trim();
  const sNameVal = sName.value.trim();
  const emalVal = emal.value.trim();
  const passVal = pass.value.trim().split("").join("$").split(" ").join("--");
  const cPassVal = cPass.value.trim().split("").join("$").split(" ").join("--");

  let isValid = true;

  // First name validation
  if (fNameVal == "") {
    fName.placeholder = "Field can't be blank";
    fName.id = "errorName";
    isValid = false;
  } else if (fNameVal.length <= 2) {
    fName.value = "";
    fName.placeholder = "1st Name is too short";
    fName.id = "errorName";
    isValid = false;
  } else if (fNameVal.length >= 11) {
    fName.value = "";
    fName.placeholder = "1st Name is too long";
    fName.id = "errorName";
    isValid = false;
  } else {
    fName.id = "sucessName";
  }

  // Second name validation
  if (sNameVal == "") {
    sName.placeholder = "Field can't be blank";
    sName.id = "errorName";
    isValid = false;
  } else if (sNameVal.length <= 2) {
    sName.value = "";
    sName.placeholder = "2nd Name is too short";
    sName.id = "errorName";
    isValid = false;
  } else if (sNameVal.length >= 11) {
    sName.value = "";
    sName.placeholder = "2nd Name is too long";
    sName.id = "errorName";
    isValid = false;
  } else {
    sName.id = "sucessName";
  }

  // Email name validation
  if (emalVal == "") {
    emal.placeholder = "Email can't be blank";
    emal.style.border = "1px solid red";
    isValid = false;
  } else if (emalVal.length <= 6) {
    emal.value = "";
    emal.placeholder = "Email is too short";
    emal.style.border = "1px solid red";
    isValid = false;
  } else if (emalVal.length >= 30) {
    emal.value = "";
    emal.placeholder = "Email is too long";
    emal.style.border = "1px solid red";
    isValid = false;
  } else {
    emal.style.border = "1px solid #42b72a";
    emal.style.borderBottom = "2px solid #42b72a";
  }

  //   password validation
  if (passVal == "") {
    pass.placeholder = "Password can't be blank";
    pass.style.border = "1px solid red";
    isValid = false;
  } else if (passVal.length <= 14) {
    pass.value = "";
    pass.placeholder = "Need strong Password >8";
    pass.style.border = "1px solid red";
    isValid = false;
  } else {
    pass.style.border = "1px solid #42b72a";
    pass.style.borderBottom = "2px solid #42b72a";
  }

  //  Confirm Password Validation
  if (cPassVal == "") {
    cPass.placeholder = "Confirm Password can't be blank";
    cPass.style.border = "1px solid red";
    isValid = false;
  } else if (cPassVal.length <= 14) {
    cPass.value = "";
    cPass.placeholder = "Need strong confirm Password >8";
    cPass.style.border = "1px solid red";
    isValid = false;
  } else if (cPassVal != passVal) {
    cPass.value = "";
    cPass.placeholder = "confirm Password didn't matched";
    cPass.style.border = "1px solid red";
    isValid = false;
  } else {
    cPass.style.border = "1px solid #42b72a";
    cPass.style.borderBottom = "2px solid #42b72a";
  }

  //   ensuring to save data only after full form validation
  if (isValid) {
    saveUserInfo();
    console.log("successfull");
    window.location.href = "login.html";
  } else {
    console.log("form validation failed");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

visible.addEventListener("click", passVisible);

//  runnig function to check print saved info on load
/* window.onload = function () {
  checkSavedUserInfo();
}; */
