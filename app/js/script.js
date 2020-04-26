$(document).ready(function() {
    $('.town-select').niceSelect();
  });
   
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
      
    ]
  });

  

  document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  
    // Toggle theme
    var interval = setInterval(() => {
      let body = document.body;
     
    }, 5000);
    
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
  });

  (function () {
    var toggle = document.querySelector('.nav-toggle');
    
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
    });
  })();
  