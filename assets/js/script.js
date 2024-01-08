function changeBg()
{
  var navbar = document.getElementById('navigation-bar');
  var scrollValue = window.scrollY;
  console.log(scrollValue);
  
  if(scrollValue < 300){
    navbar.classList.remove('bgcolornav');
  }
  else{
    navbar.classList.add('bgcolornav');
  }
  
}

window.addEventListener('scroll', changeBg);