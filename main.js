var bootingPage = document.getElementById("booting-page");
var scanPage = document.getElementById("scan-page");
var loginPage = document.getElementById("login-page");
var confirmationPage = document.getElementById("confirmation-page");
var connectingPage = document.getElementById("connecting-page");
var billingPage = document.getElementById("billing-page");
var pages = document.getElementsByClassName("page");

var lastPage;
var loopScreen = true;
var position = 0;

window.onload = function() {
  loopPages();
  setInterval(loopPages, 5000);
}

function loopPages() {
  if (loopScreen) {
    toggleVisibility(pages[position]);

    if (position < pages.length - 1) {
      position += 1; }
    else {
      position = 0;
    }
  }
}


document.addEventListener('keydown', (event) => {
  var key = event.key;
  loopScreen = false;
  switch(key) {
    case "1":
      console.log("booting screen");
      toggleVisibility(bootingPage);
      break;
    case "2":
      console.log("scanning screen")
      toggleVisibility(scanPage);
      break;
    case "3":
      console.log("login screen");
      toggleVisibility(loginPage);
      break;
    case "4":
      console.log("billing screen");
      toggleVisibility(billingPage);
      break;
    case "5":
      console.log("confirmation pay screen");
      toggleVisibility(confirmationPage);
      break;
    case "6":
      console.log("connecting screen");
      toggleVisibility(connectingPage);
      break;
    default:
      console.log("no valid input")
  }
}, false)

function toggleVisibility(page) {
  if (lastPage != null) {
    lastPage.style.display = "none";
  }

  if (page.style.display == "" || page.style.display == "none") {
    page.style.display = "block";
  }
  lastPage = page
}
