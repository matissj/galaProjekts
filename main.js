$(document).ready(function () {
    if (Cookies.get('cookieCheck') != '1') {
        $("#cookie-banner").show();
    };

    $('.button').click(function () {  
      Cookies.set('cookieCheck', '1', { expires: 1, path: '' });
        $('#cookie-banner').hide();
    });



    var moviesID = ['tt0758758', 'tt0318462', 'tt0163978', 'tt1441912', 'tt1407927', 'tt2305051', 'tt1104806', 'tt2167266', 'tt0838221', 'tt1093824'];
    moviesID.sort(function () { return .5 - Math.random(); });


    function apiCall() {

        var filmas = moviesID.slice(0, 4);
        $.each(filmas, function (i, value) { // i = indeks un value ir vertiba

            address = "http://www.omdbapi.com/?i=" + filmas[i] + "&apikey=4a1cb752";

            $.get(address, function (response) {

                var title = response.Title;
                var poster = response.Poster;
                var language = response.Language;
                var genre = response.Genre;

                var movie = ".movie" + i; // filmas vieta html failaa - <div class="movie1" -> .movie0

                $(movie + " h4").append(title);
                $(movie + " .poster-frame").append('<img src="' + poster + '">');
                $(movie + " .language").append(language);
                $(movie + " .genre").append(genre);

            });
        });

        $('#carousel').owlCarousel({
            dotsEach: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });

        $("#poga").on("click",function(){
            $(".elements").toggleClass("show")
        });

/* =========================================== SMOOOOOTH SCROLLING =============================*/


        // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      },700, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  
});


    }









  
    apiCall();
});
