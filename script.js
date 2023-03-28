$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
      strings: ["We Develop", "Website Designing","App Development","Digital Marketing","AND Many More"],
      typeSpeed: 200,
      backSpeed: 60,
      loop: true
  });
    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// //Animatin Typing Navigation
// document.addEventListener('DOMContentLoaded',function(event){
//     // array with texts to type in typewriter
//     var dataText = [ "We Design and Develop", "Website Designing","App Development","Digital Marketing","AND Many More"];
    
    
//     // type one text in the typwriter
//     // keeps calling itself until the text is finished
    
//     function typeWriter(text, i, fnCallback) {
//       // chekc if text isn't finished yet
//       if (i < (text.length)) {
//         // add next character to h1
//        document.getElementById("home").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
//         // wait for a while and call this function again for next character
//         setTimeout(function() {
//           typeWriter(text, i + 1, fnCallback)
//         }, 200);
//       }
//       // text finished, call callback if there is a callback function
//       else if (typeof fnCallback == 'function') {
//         // call callback after timeout
//         setTimeout(fnCallback, 700);
//       } 
//     }
//     // start a typewriter animation for a text in the dataText array
//      function StartTextAnimation(i) {
//        if (typeof dataText[i] == 'undefined'){
//           setTimeout(function() {
//             StartTextAnimation(0);
//           }, 50000);
//        }
//        // check if dataText[i] exists
//       if (i < dataText[i].length) {
//         // text exists! start typewriter animation
//        typeWriter(dataText[i], 0, function(){
//          // after callback (and whole text has been animated), start next text
//          StartTextAnimation(i + 1);
//        });
//       }
//     }
//     // start the text animation
//     StartTextAnimation(0);
//   });