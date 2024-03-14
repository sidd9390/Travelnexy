var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
 

function changeBg()
{
  var navbar1 = document.getElementById('naviid_1');
  var scrollValue = window.scrollY;
  console.log(scrollValue);
  if(scrollValue < 70){
    
    navbar1.classList.add('bg_ch');
    navbar1.classList.remove('bg_changed');

    
    document.getElementById("dis_pl").style.display ="block";
    document.getElementById("navsp1").style.color ="white";
    document.getElementById("navsp2").style.color ="white";
    document.getElementById("navsp3").style.color ="white";
    document.getElementById("navsp4").style.color ="white";
    document.getElementById("navsp5").style.color ="white";
  }
  else{
    // navbar.classList.add('bgcolornav');
    navbar1.classList.remove('bg_ch');
    navbar1.classList.add('bg_changed');

    document.getElementById("dis_pl").style.display ="none";
    document.getElementById("navsp1").style.color ="black";
    document.getElementById("navsp2").style.color ="black";
    document.getElementById("navsp3").style.color ="black";
    document.getElementById("navsp4").style.color ="black";
    document.getElementById("navsp5").style.color ="black";
  }
}

window.addEventListener('scroll', changeBg);


