const yoyo = document.querySelector(".yoyo");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.innerWidth >= 780) {
    if (scrollY >= 1400 && scrollY <= 2600) {
      yoyo.style.transform = `translateX(-${window.scrollY * 0.5 - 700}px)`;
    }
  }
});
