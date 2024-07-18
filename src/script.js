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

  $(".border.rounded").hover(
    function () {
      $(this).addClass("shadow-lg");
    },
    function () {
      $(this).removeClass("shadow-lg");
    }
  );

  // Animasi untuk tombol "Continue reading"
  $(".icon-link-hover").hover(
    function () {
      $(this).addClass("text-decoration-underline"); // Menambah garis bawah saat hover
    },
    function () {
      $(this).removeClass("text-decoration-underline"); // Menghapus garis bawah saat tidak dihover
    }
  );

  // Animasi untuk progress bar
  $(".progress-bar").each(function () {
    var progressWidth = $(this).attr("aria-valuenow") + "%";
    $(this).css("width", progressWidth);
  });

  // 1. Animasi slide up dan slide down pada header blog post
  $(".blog-post h2").hide().slideDown(2000);

  // 2. Animasi fade untuk paragraph pada hover
  $(".blog-post p").hover(
    function () {
      $(this).fadeTo(500, 0.5);
    },
    function () {
      $(this).fadeTo(500, 1);
    }
  );

  // 3. Mengganti warna link pada hover
  $(".blog-post a").hover(
    function () {
      $(this).css("color", "#ff0000");
    },
    function () {
      $(this).css("color", "");
    }
  );

  // 4. Menambah animasi pada blockquote
  $(".blockquote").hover(
    function () {
      $(this).css({
        "border-left": "5px solid #00f",
        "background-color": "#666666",
      });
    },
    function () {
      $(this).css({
        "border-left": "",
        "background-color": "",
      });
    }
  );

  // 5. Membuat elemen list muncul dengan efek fade in
  $(".accordion-body ul").hide();
  $(".accordion-item button").click(function () {
    $(this).closest(".accordion-item").find(".accordion-body ul").fadeToggle(1000);
  });

  // 6. Menambahkan animasi pada button accordion saat di klik
  $(".accordion-button").click(function () {
    $(this).toggleClass("active-button");
    if ($(this).hasClass("active-button")) {
      $(this).css({
        "background-color": "#666666",
        "border-bottom": "2px solid #333",
      });
    } else {
      $(this).css({
        "background-color": "",
        "border-bottom": "",
      });
    }
  });

  // 7. Menambah animasi scroll ke atas halaman saat judul blog post di klik
  $(".blog-post h2.display-5").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Animasi untuk judul blog post
  $(".blog-post .display-5").hide().slideDown(2000);

  // Efek hover pada nama penulis
  $(".blog-post-meta a").hover(
    function () {
      $(this).css({
        "font-weight": "bold",
        color: "#ff5733",
      });
    },
    function () {
      $(this).css({
        "font-weight": "normal",
        color: "",
      });
    }
  );

  // Animasi untuk blockquote
  $("blockquote").css("opacity", 0).animate({ opacity: 1 }, 3000);

  // Efek hover pada tabel
  $(".table").hover(
    function () {
      $(this).addClass("table-hover");
    },
    function () {
      $(this).removeClass("table-hover");
    }
  );

  // Animasi untuk card
  $(".card").hide().fadeIn(3000);

  // Animasi tombol muncul dengan efek slideDown
  $(".blog-pagination a").hide().slideDown(1000);

  // Animasi tombol saat di-click
  $(".blog-pagination a").on("click", function (e) {
    e.preventDefault();
    $(this).animate(
      {
        fontSize: "1.5em",
        padding: "15px",
      },
      500,
      function () {
        $(this).animate(
          {
            fontSize: "",
            padding: "",
          },
          500
        );
      }
    );
  });

  // Efek hover pada tombol dengan mengganti background color
  $(".blog-pagination a").hover(
    function () {
      $(this).css("background-color", "lightgrey");
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  // Tooltip saat tombol di-hover
  $(".blog-pagination a")
    .each(function () {
      $(this).attr("title", "Klik untuk membuka " + $(this).text());
    })
    .tooltip();

  // Efek toggle pada tombol Disabled
  $(".disabled").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("btn-outline-secondary btn-secondary").text("Clicked!");
  });

  // Animasi slide up and down pada Recent Posts
  $(".list-unstyled li a").on("click", function (e) {
    e.preventDefault();
    var $postContent = $(this).find(".col-lg-8");
    $postContent.slideToggle(500);
  });

  // Menyoroti postingan saat di-hover
  $(".list-unstyled li a").hover(
    function () {
      $(this).css({
        backgroundColor: "#f0f0f0",
        transition: "background-color 0.5s",
      });
    },
    function () {
      $(this).css({
        backgroundColor: "",
        transition: "background-color 0.5s",
      });
    }
  );

  // Menambahkan efek rotasi pada ikon SVG saat di-hover
  $(".list-unstyled li a svg").hover(
    function () {
      $(this).css({
        transform: "rotate(15deg)",
        transition: "transform 0.5s",
      });
    },
    function () {
      $(this).css({
        transform: "rotate(0deg)",
        transition: "transform 0.5s",
      });
    }
  );

  // Animasi menghilang pada ikon SVG saat di-click
  $(".list-unstyled li a").on("click", function (e) {
    e.preventDefault();
    var $svgIcon = $(this).find("svg");
    $svgIcon.fadeOut(500, function () {
      $svgIcon.fadeIn(500);
    });
  });
});
