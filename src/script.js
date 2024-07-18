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
  $(".p-md-5").hover(
    function () {
      $(this).css("background-color", "#666666"); // Mengubah warna background saat hover
      $(this).fadeIn(); // Efek fade in saat mouse masuk
    },
    function () {
      $(this).css("background-color", ""); // Mengembalikan warna background saat mouse keluar
    }
  );

  $(".trending-today").hide().fadeIn(4000);
});
