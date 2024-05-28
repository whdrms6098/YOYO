window.addEventListener("scroll", function () {
  if (scrollY >= 800) {
    $("#to-top").addClass("active");
  } else {
    $("#to-top").removeClass("active");
    $("#to-top").removeClass("top");
  }
});

// 사이드바
$(".menu-open").click(function (e) {
  e.stopPropagation();
  if ($("nav").hasClass("active")) {
    $("nav").removeClass("active");
  } else {
    $("nav").addClass("active");
  }
});

$("nav").click(function (e) {
  e.stopPropagation();
});

$(window).click(function () {
  $("nav").removeClass("active");
});

$(".side-menu-close").click(function () {
  $("nav").removeClass("active");
});

// 스크롤 탑
$("#to-top").click(function () {
  $("html, body").animate({ scrollTop: "0" }, 400);
  $("#to-top").addClass("top");
});

const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (window.innerWidth >= 780) {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("show");
        return;
      }
      entry.target.classList.add("show");
    }
  });
});

const animateEls = document.querySelectorAll(".animation");
animateEls.forEach(function (el) {
  io.observe(el);
});

//모바일인경우 애니메이션 적용 x
$(document).ready(function () {
  function checkWindowSize() {
    if ($(window).innerWidth() <= 780) {
      $(".animation").addClass("show");
    } else {
      $(".animation").each(function () {
        if (!$(this).hasClass("show")) {
          $(this).removeClass("show");
        }
      });
    }
  }

  checkWindowSize();

  $(window).resize(function () {
    checkWindowSize();
  });
});

$("#about").click(function () {
  window.location.href = "/about";
});
