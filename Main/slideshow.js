const currentImg = (n) =>{

}

//Actual slideshow mechanic
var myIndex = 0;
var slideShow = () => {
  var x = document.getElementsByClassName("slideshow");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  
  x[myIndex-1].style.display = 'block';
  setTimeout(slideShow, 5000);
}
slideShow();





