$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    // Tambahkan parameter e di dalam fungsi click
    e.preventDefault(); // Menghentikan default behavior dari link
    $(this).toggleClass("active");
    // smooth scroll
    var target = $(this).attr("href"); // Mengambil nilai atribut href dari link
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top, // Animasi scroll ke posisi elemen target
      },
      1000
    ); // Durasi animasi dalam milidetik (ms)
  });
});
