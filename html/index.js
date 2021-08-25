var cookie = document.getElementsByTagName("cookie")[0];
var c = cookie.getElementsByTagName("enabled")[0];
if(navigator.cookieEnabled){alert("thank you for having cookies enabled")}else{c.innerHTML = "please enable cookies";}
