var cookieenabled = navigator.cookieEnabled();
var c = document.getElementByTagName("cookiesEnabled");
if(navigator.cookieEnabled){console.log("enabled")}else{c.innerText = "Please Enable Cookies!";}
