$(function(){
  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
  });
  $(".navi a").click(function () {
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
  });

  /*-------------------------------
  スクロール時のスライド
  ---------------------------------*/
  const slideElements = document.querySelectorAll(
    '.slideInL-img, .slideInR-img'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0
  });
  slideElements.forEach((element) => {
    observer.observe(element);
  });

});