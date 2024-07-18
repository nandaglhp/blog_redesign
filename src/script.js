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
  $(".p-md-5").fadeIn(3000); // Animasi fadeIn dengan durasi 1000ms (1 detik)
});
