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

function formValidateFunction() {

    var x = document.forms["form-page"]["user_message"].value;
    var y = document.forms["form-page"]["user_email"].value;

    if (y == "") {
        //Alert User that form needs a email
        alert("Please Enter an Email Address.\nThank you");
        return false;
    }
    else if (x == "") {
        //Alert User that form needs a message
        alert("Please Enter a Message.\nThank you");
        return false;
    }

    alert("Thank you for submitting your message. \nWe will get back to you as soon as possible.");

    return true;

}

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