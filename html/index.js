function load(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    document.body.innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "change.txt", true);
  xhttp.send();
}
}
