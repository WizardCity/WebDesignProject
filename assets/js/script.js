// Fade in nav buttons on load
$(document).ready(function(){
    $(".navbar").hide(0).fadeIn(1000);
    //Fade in product nav bar slower than main Nav
    $(".ProductNav").hide(0).delay(200).fadeIn(1500);
});

// Fades out top bar as user scrolls
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 150);
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function formAlertFunction() {
	//Alert User that form was completed successfully
    alert("Your message has been sent to us.\nThank you");

    //redirect after confirmation to home page
    window.location.href = "index.html";
}