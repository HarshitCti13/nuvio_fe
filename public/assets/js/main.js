 $(document).ready(function () {
            $(".ct_menu_bar").click(function () {
                $(".ct_navbar").addClass("ct_show");
            });
            $(".ct_close_menu").click(function () {
                $(".ct_navbar").removeClass("ct_show");
            });

            $('.ct_client_slider').owlCarousel({
    loop: true,
      margin: 12,
      items: 5,
      autoplay: true,
      autoplayTimeout: 1000,     // very small — forces continuous movement
      autoplaySpeed: 8000,     // how long autoplay "animation" runs (ms)
      smartSpeed: 8000,        // match autoplaySpeed for consistent movement
      autoplayHoverPause: true,
      slideTransition: 'linear',
      mouseDrag: true,         // keep drag enabled if you want manual control
      touchDrag: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})


$('.ct_coach_created_slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
     autoplayTimeout: 1000,     // very small — forces continuous movement
      autoplaySpeed: 2000,     // how long autoplay "animation" runs (ms)
      smartSpeed: 2000, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.ct_upcoming_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
     autoplayTimeout: 1000,     // very small — forces continuous movement
      autoplaySpeed: 2000,     // how long autoplay "animation" runs (ms)
      smartSpeed: 2000, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
            
        })

        $(window).on("load", function () {
  $(".ct_loader_main").fadeOut();
});

AOS.init();


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/31/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        // document.getElementById("days").innerText = Math.floor(distance / (day)),
        //   document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        //   document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        //   document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        
        //seconds
      }, 0)
  }());
