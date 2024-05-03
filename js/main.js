const yoyo = document.querySelector("picture.yoyo");
const exploreBg = document.querySelector(".explore-bg");
const noodles = document.querySelector(".noodles");

// 스크롤 이벤트
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.innerWidth >= 780) {
    if (scrollY <= 900) {
      yoyo.style.transform = `translateX(-${window.scrollY * 0.5}px)`;
      exploreBg.style.transform = `translateX(${
        -850 + window.scrollY * 0.4
      }px)`;
    } else if (scrollY >= 2300 && scrollY <= 3500) {
      noodles.style.transform = `translateX(${650 - window.scrollY * 0.4}px`;
    }
  }

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

// 시리즈 컨텐츠
$(".btn--ramen").click(function () {
  $(this).removeClass("btn__white").addClass("btn__active");
  $(".btn--goreng").removeClass("btn__active").addClass("btn__white");
  $(".series--goreng").hide();
  $(".series--ramen").fadeIn();
});

$(".btn--goreng").click(function () {
  $(this).removeClass("btn__white").addClass("btn__active");
  $(".btn--ramen").removeClass("btn__active").addClass("btn__white");
  $(".series--ramen").hide();
  $(".series--goreng").fadeIn();
});

// Wedo 슬라이드
new Swiper(".wedo .swiper-container", {
  slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 30, // 슬라이드간 간격

  loopFillGroupWithBlank: true,
  autoHeight: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  observer: true,
  breakpoints: {
    1280: {
      slidesPerView: 1.7,
    },
  },
  navigation: {
    prevEl: ".wedo .swiper-prev",
    nextEl: ".wedo .swiper-next",
  },
});

// products hover 이벤트
$(".prod1").mouseover(function () {
  $(this).removeClass("show");
  $(this).siblings().addClass("show");
});

$(".prod2").mouseleave(function () {
  $(this).removeClass("show");
  $(".prod1").addClass("show");
});

// Recipes 슬라이드
new Swiper(".recipes .swiper-container", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
});

// Trust 이벤트
$(".switch__my").click(function () {
  $(this).addClass("active");
  $(".switch__id").removeClass("active");
  $(".trust--switch span").removeClass("switch__active");
  $(".trust--id").hide();
  $(".trust--my").show();
});

$(".switch__id").click(function () {
  $(this).addClass("active");
  $(".switch__my").removeClass("active");
  $(".trust--switch span").addClass("switch__active");
  $(".trust--my").hide();
  $(".trust--id").show();
});

$(".switch--label span").click(function () {
  if ($(this).hasClass("switch__active")) {
    $(this).removeClass("switch__active");
    $(".switch__my").addClass("active");
    $(".switch__id").removeClass("active");
    $(".trust--id").hide();
    $(".trust--my").show();
  } else {
    $(this).addClass("switch__active");
    $(".switch__my").removeClass("active");
    $(".switch__id").addClass("active");
    $(".trust--my").hide();
    $(".trust--id").show();
  }
});

const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (window.innerWidth >= 780) {
      console.log("123");
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
