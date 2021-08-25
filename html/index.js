var cookie = document.getElementsByTagName("cookie")[0];
var c = cookie.getElementsByTagName("enabled")[0];
if(navigator.cookieEnabled){console.log("thank you for having cookies enabled")}else{alert("please enable cookies");}
