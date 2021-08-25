class cookie(){
  static cookiesenabled(){
    return navigator.cookieEnabled;
  }
} 
class run(){
  static start(){
    import("/run/Run.js").then((module) => {
      console.log("running");
    }
}
}
