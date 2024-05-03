$(".hi-yoyo").mousemove(function (e) {
  const xRelativeToHeader = e.clientX / $(".hi-yoyo").width();
  const yRelativeToHeader = e.clientY / $(".hi-yoyo").height();

  // IntersectionObserver 생성
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // entry.isIntersecting은 요소가 화면에 보이는지 여부를 나타냅니다.
      if (window.innerWidth >= 780) {
        if (entry.isIntersecting) {
          // 보이는 경우에만 효과 적용
          $(".yoyo-surfing").css(
            "transform",
            `translate(${-xRelativeToHeader * 50}px, ${
              -yRelativeToHeader * 50
            }px)`
          );
        } else {
          // 화면에 보이지 않는 경우 효과 제거
          $(".yoyo-surfing").css("transform", "none");
        }
      }
    });
  });

  // 감시할 대상 요소 지정
  const target = $(".yoyo-surfing")[0];
  observer.observe(target);
});

$(".series").mousemove(function (e) {
  const xRelativeToHeader = e.clientX / $(".hi-yoyo").width();
  const yRelativeToHeader = e.clientY / $(".hi-yoyo").height();

  // IntersectionObserver 생성
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // entry.isIntersecting은 요소가 화면에 보이는지 여부를 나타냅니다.
      if (entry.isIntersecting) {
        // 보이는 경우에만 효과 적용
        $(".ramen").css(
          "transform",
          `translate(${-xRelativeToHeader * 20}px, ${
            -yRelativeToHeader * 20
          }px)`
        );
      } else {
        // 화면에 보이지 않는 경우 효과 제거
        $(".ramen").css("transform", "none");
      }
    });
  });

  // 감시할 대상 요소 지정
  const target = $(".ramen")[0];
  observer.observe(target);
});
