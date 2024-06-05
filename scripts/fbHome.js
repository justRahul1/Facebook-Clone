const firstName = localStorage.getItem("firstName");
const secondName = localStorage.getItem("secondName");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const confirmPassword = localStorage.getItem("confirmPassword");
const profileBox = document.getElementById("profileMain");
const profileIcon = document.getElementById("headPfBox");
const logOutBtn = document.getElementById("logOutBtnMain");
const deleteBtn = document.getElementById("deleteBtnMain");
const userProfileName = document.querySelectorAll("#userName");
const darkMode = document.getElementById("darkModeBtn");
const body = document.querySelector("body");
const head = document.getElementById("head");
const story = document.querySelector(".story");
const postBoxMain = document.querySelector(".postBoxMain");
const pblshPostMain = document.querySelectorAll(".pblshPostMain");
const textPost = document.getElementById("textPost");
const imgPost = document.getElementById("imgPost");
const post = document.getElementById("post");

// Method for dynamic username
const dynamicUserName = `${firstName} ${secondName}`;

// Method for date, day and time
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date1 = new Date();
const day = days[date1.getDay()];
const month = months[date1.getMonth()];
const realDate = date1.getDate();
const year = date1.getFullYear();
const fullDateYear = `${day}, ${month} ${realDate} ${year}`;
console.log(date1);
console.log(fullDateYear);

// Function for creating and posting any post
function pblshPostFnc() {
  const textPostVal = textPost.value.trim();
  const imgPostVal = imgPost.value.trim();

  if (textPostVal == "") {
    textPost.style.border = "1px solid red";
    textPost.placeholder = "I am hungry!!, Need some text to eat...";
    return;
  } else {
    const publishBox111 = document.querySelector(".publishBox111");
    const pblshPostMain = document.createElement("div");
    pblshPostMain.className = "pblshPostMain";
    const pblshPostInfoBox = document.createElement("div");
    pblshPostInfoBox.className = "pblshPostInfoBox";
    const postBoxImg = document.createElement("div");
    postBoxImg.className = "postBoxImg";
    const postBoxImgOrg = document.createElement("img");
    postBoxImgOrg.id = "postBoxImgOrg";
    postBoxImgOrg.src =
      "https://cdn.pixabay.com/photo/2016/08/17/21/12/portrait-1601516_1280.jpg";
    postBoxImgOrg.alt = "Profile Img";
    const pblshPostInfo = document.createElement("div");
    pblshPostInfo.className = "pblshPostInfo";
    const pblshPostInfoName = document.createElement("h3");
    pblshPostInfoName.className = "pblshPostInfoName";
    pblshPostInfoName.innerHTML = dynamicUserName;
    const pblshPostInfoDate = document.createElement("h4");
    pblshPostInfoDate.className = "pblshPostInfoDate";
    pblshPostInfoDate.innerHTML = fullDateYear;
    const postInfoBox = document.createElement("div");
    postInfoBox.className = "postInfoBox";
    const postInfoBoxText = document.createElement("p");
    postInfoBoxText.className = "postInfoBoxText";
    postInfoBoxText.innerHTML = textPostVal;
    const hr = document.createElement("hr");
    const engageBoxMain = document.createElement("div");
    engageBoxMain.className = "engageBoxMain";
    const like = document.createElement("div");
    like.className = "like mediaOpt";
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-thumbs-up");

    // Function for liking the post
    like.addEventListener("click", function () {
      if (!icon.classList.contains("likeActive")) {
        icon.classList.add("fa-solid", "fa-thumbs-up", "likeActive");
      } else {
        icon.classList.remove("likeActive");
        icon.classList.add("fa-solid", "fa-thumbs-up");
      }
    });
    const likeNum = document.createElement("span");
    likeNum.id = "likeNum";
    likeNum.innerHTML = ` ${Math.round(Math.random() * 100)}K Like`;
    const comment = document.createElement("div");
    comment.className = "comment mediaOpt";
    const icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-message");
    const commentNum = document.createElement("span");
    commentNum.id = "commentNum";
    commentNum.innerHTML = ` ${Math.round(Math.random() * 1000)} Comment`;
    const share = document.createElement("div");
    share.className = "share mediaOpt";
    const icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-share");
    const shareNum = document.createElement("span");
    shareNum.id = "shareNum";
    shareNum.innerHTML = "Share";
    publishBox111.appendChild(pblshPostMain);
    pblshPostMain.appendChild(pblshPostInfoBox);
    pblshPostInfoBox.appendChild(postBoxImg);
    postBoxImg.appendChild(postBoxImgOrg);
    pblshPostInfoBox.appendChild(pblshPostInfo);
    pblshPostInfo.appendChild(pblshPostInfoName);
    pblshPostInfo.appendChild(pblshPostInfoDate);
    pblshPostMain.appendChild(postInfoBox);
    postInfoBox.appendChild(postInfoBoxText);
    // Adding Condition to post img tag only when img link is available
    if (imgPostVal != "") {
      const postInfoBoxImg = document.createElement("div");
      postInfoBoxImg.className = "postInfoBoxImg";
      const postInfoBoxImgOrg = document.createElement("img");
      postInfoBoxImgOrg.className = "postInfoBoxImgOrg";
      postInfoBoxImgOrg.src = `${imgPostVal}`;
      postInfoBoxImgOrg.alt = "User Image";
      postInfoBox.appendChild(postInfoBoxImg);
      postInfoBoxImg.appendChild(postInfoBoxImgOrg);
    }
    pblshPostMain.appendChild(hr);
    pblshPostMain.appendChild(engageBoxMain);
    engageBoxMain.appendChild(like);
    like.appendChild(icon);
    like.appendChild(likeNum);
    engageBoxMain.appendChild(comment);
    comment.appendChild(icon1);
    comment.appendChild(commentNum);
    engageBoxMain.appendChild(share);
    share.appendChild(icon2);
    share.appendChild(shareNum);
    textPost.value = "";
    imgPost.value = "";
  }
}
post.addEventListener("submit", (event) => {
  event.preventDefault();
  pblshPostFnc();
});

// Function for dark mode display
let darkModeNum = 0;
function disDark() {
  if (darkModeNum == 0) {
    darkMode.className = "fa-solid fa-sun";
    body.style.backgroundColor = "#242527";
    body.classList.add("textWhite");
    head.style.backgroundColor = "#121212";
    story.style.backgroundColor = "#121212";
    profileBox.style.backgroundColor = "#121212";
    postBoxMain.style.backgroundColor = "#121212";
    pblshPostMain.forEach((bgcChange) => {
      bgcChange.style.backgroundColor = "#121212";
    });
    darkMode.style.color = "#ffffff";
    textPost.style.backgroundColor = "#575656";
    imgPost.style.backgroundColor = "#575656";
    textPost.style.color = "#ffffff";
    imgPost.style.color = "#ffffff";

    darkModeNum = 1;
  } else if (darkModeNum == 1) {
    darkMode.className = "fa-solid fa-moon";
    body.style.backgroundColor = "#f0f2f5";
    body.classList.remove("textWhite");
    head.style.backgroundColor = "#ffffff";
    story.style.backgroundColor = "#ffffff";
    profileBox.style.backgroundColor = "#ffffff";
    darkMode.style.color = "#121212";
    postBoxMain.style.backgroundColor = "#ffffff";
    pblshPostMain.forEach((bgcChange) => {
      bgcChange.style.backgroundColor = "#ffffff";
    });
    textPost.style.backgroundColor = "#b3b1b16e";
    imgPost.style.backgroundColor = "#b3b1b16e";
    textPost.style.color = "black";
    imgPost.style.color = "black";
    darkModeNum = 0;
  }
}
darkMode.addEventListener("click", disDark);

// function for displaying dynamic username
userProfileName.forEach((nameOfUser) => {
  nameOfUser.innerHTML = dynamicUserName;
});

// Function for dropdown of profile box on click on profile icon.
let profileIconNum = 0;
function profilePopUp() {
  if (profileIconNum == 0) {
    profileBox.style.transform = "translateY(-2px)";
    profileIconNum = 1;
  } else if (profileIconNum == 1) {
    profileBox.style.transform = "translateY(-600px)";
    profileIconNum = 0;
  }
}
profileIcon.addEventListener("click", profilePopUp);

// Function for logging out
logOutBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

// Function for permanent Account delete
function delAccount() {
  let confirmDelAccount = confirm(
    "Are you sure, you want to delete your Account permanently?"
  );
  if (confirmDelAccount == true) {
    localStorage.removeItem("firstName");
    localStorage.removeItem("secondName");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("confirmPassword");
    window.location.href = "sign.html";
  } else if (confirmDelAccount == false) {
    alert("Yeee..! your Account got survived :)");
  }
}
deleteBtn.addEventListener("click", delAccount);
