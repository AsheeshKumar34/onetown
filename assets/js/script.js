$(document).ready(function () {
    $("#myForm").on('submit', function (e) {
        e.preventDefault();
        var action = $('#myForm').attr('action');
        var email = $('#user-email').val();

        if (!email) {
            $(".validationText").text("Please Enter Email").show();
        }
        else if(!IsEmail(email)){
            $(".validationText").text("Invalid email").show();
        }
        else{
            var url = action + "?email=" + email;
            window.open(url, '_blank');
            $('#user-email').val('');
        }
        $("input#user-email").focus(function(){
            $(".validationText").hide();
        });
    });

    // Checking email
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    // Scroll effect
    $(".about-link").click(function(e){
        var targetOffset= $("#about-us").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1500);
        e.preventDefault();
    });

    $(".work-link").click(function(e){
        var targetOffset= $("#featured").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1500);
        e.preventDefault();
    });

    $(".services-link").click(function(e){
        var targetOffset= $("#services").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1500);
        e.preventDefault();
    });

    $(".contact-link").click(function(e){
        var targetOffset= $("#contact-us").offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 1500);
        e.preventDefault();
    });

});


