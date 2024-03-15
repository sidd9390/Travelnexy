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




const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



const initSlider1 = () => {
  const imageList1 = document.querySelector(".slider-wrapper1 .image-list1");
  const slideButtons1 = document.querySelectorAll(".slider-wrapper1 .slide-button1");
  const sliderScrollbar1 = document.querySelector(".container .slider-scrollbar1");
  const scrollbarThumb1 = sliderScrollbar1.querySelector(".scrollbar-thumb1");
  const maxScrollLeft1 = imageList1.scrollWidth - imageList1.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb1.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb1.offsetLeft;
      const maxThumbPosition = sliderScrollbar1.getBoundingClientRect().width - scrollbarThumb1.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft1;
          
          scrollbarThumb1.style.left = `${boundedPosition}px`;
          imageList1.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons1.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide1" ? -1 : 1;
          const scrollAmount = imageList1.clientWidth * direction;
          imageList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons1 = () => {
      slideButtons1[0].style.display = imageList1.scrollLeft <= 0 ? "none" : "flex";
      slideButtons1[1].style.display = imageList1.scrollLeft >= maxScrollLeft1 ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList1.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft1) * (sliderScrollbar1.clientWidth - scrollbarThumb1.offsetWidth);
      scrollbarThumb1.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList1.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons1();
  });
}

window.addEventListener("resize", initSlider1);
window.addEventListener("load", initSlider1);


function fun_flights(){
    document.getElementById("dom").style.color = "#DF6951";
    document.getElementById("inter").style.color = "black";
    document.getElementById("domestic").style.display = "block";
    document.getElementById("International").style.display = "none";
}



function fun_flights2(){
    document.getElementById("dom").style.color = "black";
    document.getElementById("inter").style.color = "#DF6951";
    document.getElementById("domestic").style.display = "none";
    document.getElementById("International").style.display = "block";
}
document.getElementById("dom").addEventListener("click", fun_flights);
document.getElementById("inter").addEventListener("click", fun_flights2);


function india_tour1(){
    document.getElementById("north").style.color = "#DF6951";
    document.getElementById("south").style.color = "black";
    document.getElementById("north_india").style.display = "block";
    document.getElementById("south_india").style.display = "none";
}



function india_tour2(){
    document.getElementById("north").style.color = "black";
    document.getElementById("south").style.color = "#DF6951";
    document.getElementById("north_india").style.display = "none";
    document.getElementById("south_india").style.display = "block";
}
document.getElementById("north").addEventListener("click", india_tour1);
document.getElementById("south").addEventListener("click", india_tour2);



const initSlider2 = () => {
  const imageList2 = document.querySelector(".slider-wrapper2 .image-list2");
  const slideButtons2 = document.querySelectorAll(".slider-wrapper2 .slide-button2");
  const sliderScrollbar2 = document.querySelector(".container .slider-scrollbar2");
  const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
  const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb2.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb2.offsetLeft;
      const maxThumbPosition = sliderScrollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft2;
          
          scrollbarThumb2.style.left = `${boundedPosition}px`;
          imageList2.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons2.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide2" ? -1 : 1;
          const scrollAmount = imageList2.clientWidth * direction;
          imageList2.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons2 = () => {
      slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "flex";
      slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList2.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetWidth);
      scrollbarThumb2.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList2.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons2();
  });
}

window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);














$(document).ready(function() {
  
    // Change image on selection
    $("#gallery img").click(function() {
      // Get current image source
      var image = $(this).attr("src");
      // Apply grayscale to thumbnails except selected
      $("#gallery")
        .find("img")
        .css("filter", "grayscale(1)");
      $(this).css("filter", "none");
      // Change image
      $("#gallery-img").css("background-image", "url(" + image + ")");
      // Apply link to image
      $("#gallery-link").attr("href", image);
      // Use id for count
      $("#count").text($(this).attr("id"));
    });
    
    // Get total number of images
    var gallerySize = $(".gallery-thumbnails img").length;
    $("#total").text(gallerySize);
    
    var display = $("#imgDisplay");
    var scroll = $("#imgScroll");
    var scale = $("#imgScale");
    
    // Image display
    display.change( function() {
      if(display.val() === "contain") {
        $("#gallery-img").css("background-size","contain");
      } else {
        $("#gallery-img").css("background-size","cover");
      }
    });
    
    // Scroll
    scroll.change( function() {
      if(scroll.val() === "yes") {
        $("#gallery-box").css("overflow","scroll");
      } else {
        $("#gallery-box").css("overflow","hidden");
      }
    });
    
    // Scale
    var changeScale = scale.change( function() {
      $("#gallery-img").css("background-size", scale.val() + "px");
    });
  
  });














  