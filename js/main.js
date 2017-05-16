(function($) {
  $(function() {
    var step = 0;

    $('.scrollspy').scrollSpy({
      scrollOffset: 1
    });

    $(window).on('resize load', function() {
      if (step == 0) {
        $(window).scrollTop($('#register-banner').offset().top);
      } else if (step == 1) {
        $(window).scrollTop($('#step1').offset().top);
      }
    });

    var type = 0;

    var json = {
      "email": "ceva",
      "password": "asda",
      "role": "user"
    };
    console.log(json);
    console.log(JSON.stringify(json));


    $('#partener').on('click', function() {
      type = "admin";
      $('#become').html("Become a partener");
      step = 1;
    });

    $('#client').on('click', function() {
      type = "user";
      $('#become').html("Become a client");
      step = 1;
    });

    $('#register').on('submit', function(e) {
      e.preventDefault(); //prevent form from submitting

      $.ajax({
        type: "POST",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://192.168.0.113:8080/evconnect/signup',
        data: JSON.stringify(json),

        success: function(result) {
          console.log("daaa");
        },
        error: function(result) {
          console.log("ERR: " + result);
        },
        dataType: "json"
      });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
