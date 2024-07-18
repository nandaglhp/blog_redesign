$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    // smooth scroll
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  $(".p-md-5").hide();
  $(".p-md-5").fadeIn(3000);
  $(".p-md-5").hover(
    function () {
      $(this).css("background-color", "#666666");
      $(this).fadeIn();
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  $(".trending-today").hide().fadeIn(4000);
  $(".trending-today").hover(
    function () {
      $(this).css("font-size", "2.5em");
    },
    function () {
      $(this).css("font-size", "");
    }
  );
});
