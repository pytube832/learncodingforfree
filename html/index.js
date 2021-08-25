var cookie = document.getElementsByTagName("cookie")[0];
var c = cookie.getElementsByTagName("enabled")[0];
if(navigator.cookieEnabled){console.log("enabled")}else{c.innerHTML = "please enable cookies";}
