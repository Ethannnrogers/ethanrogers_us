$(document).ready(function() {
    console.log("hello");

    $("#nav").hide();

    var clickCounter = 0;
    console.log(clickCounter);

    $("#menu").click(function() {
        clickCounter = clickCounter + 1;
        if(clickCounter % 2 == 1 ) {
            $("#nav").slideDown();
            $(".menu-item").addClass("turnblue");
        }else {
            $("#nav").slideUp();
            $(".menu-item").removeClass("turnblue");
        }
        console.log(clickCounter);

        $("#about-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#section-1").offset().top
            }, 800);
            $("#nav").slideUp();
            $(".menu-item").removeClass("turnblue");
        });
        $("#skills-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 800);
            $("#nav").slideUp();
            $(".menu-item").removeClass("turnblue");
        });
        $("#projects-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 800);
            $("#nav").slideUp();
            $(".menu-item").removeClass("turnblue");
        });
        $("#contact-button").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 800);
            $("#nav").slideUp();
            $(".menu-item").removeClass("turnblue");
        });
    });

    $('#nav-btn-1').click(function(){
        $('html, body').animate({scrollTop:$(window).height()}, 'slow');
        return false;
    });
    $("#nav-btn-2").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 800);
    });
    $("#nav-btn-3").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects-2").offset().top
        }, 800);
    });
    $("#nav-btn-4").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    });

  



    $(window).scroll(function() {
        var y = $(this).scrollTop();
        var x = $(this).width();
        var height = $(this).height();



        if (x > 768 && y > 150) {
            $("#expert").addClass("fade-in-top");
            $("#expert").removeClass("fade-out-bck");
        }else {
            $("#expert").addClass("fade-out-bck");
            $("#expert").removeClass("fade-in-top");
        }
        if (x > 768 && y > 800) {
            $("#scratch").addClass("fade-in-top");
            $("#scratch").removeClass("fade-out-bck");
            $("#mac").addClass("slide-in-right");
            $("#mac").removeClass("slide-out-right");
        }else {
            $("#scratch").addClass("fade-out-bck");
            $("#scratch").removeClass("fade-in-top");
            $("#mac").addClass("slide-out-right");
            $("#mac").removeClass("slide-in-right");
        }
        if (x > 768 && y > 1480) {
            $("#template").addClass("fade-in-top");
            $("#template").removeClass("fade-out-bck");
            $("#mac-2").addClass("slide-in-left");
            $("#mac-2").removeClass("slide-out-left");
        }else {
            $("#template").addClass("fade-out-bck");
            $("#template").removeClass("fade-in-top");
            $("#mac-2").addClass("slide-out-left");
            $("#mac-2").removeClass("slide-in-left");
        }
        if (height > 700 && y > 1880) {
            $("#template").addClass("fade-in-top");
            $("#template").removeClass("fade-out-bck");
            $("#mac-2").addClass("slide-in-left");
            $("#mac-2").removeClass("slide-out-left");
        }else {
            $("#template").addClass("fade-out-bck");
            $("#template").removeClass("fade-in-top");
            $("#mac-2").addClass("slide-out-left");
            $("#mac-2").removeClass("slide-in-left");
        }
        
    })


   
 

   





})


// $.fn.isVisible = function() {
//     // Am I visible?
//     // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
//     // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
//     // That is why either width or height have to be > 0.
//     var rect = this[0].getBoundingClientRect();
//     return (
//         (rect.height > 0 || rect.width > 0) &&
//         rect.bottom >= 0 &&
//         rect.right >= 0 &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };


// if ($('').isVisible()) {
//     $("#expert").addClass("slide-out-right");
//     console.log("visible");
// }else {
//     $("#expert").removeClass("fade-in-bck");
// };


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


