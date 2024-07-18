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

  $(".carousel-item").hover(
    function () {
      $(this).css("transform", "scale(1.1)");
      $(this).css("transition", "transform 0.3s ease");
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );

  $("#carouselExampleCaptions").on("slide.bs.carousel", function () {
    // Ambil elemen slide yang sedang aktif
    var activeSlide = $(this).find(".carousel-item.active");

    // Contoh animasi untuk elemen di dalam slide yang aktif
    activeSlide.find("img").animate({ opacity: 0.5 }, 300);
    activeSlide.find(".carousel-caption").slideUp(300);
  });
});
