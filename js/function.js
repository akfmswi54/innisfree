
//카테고리 네비게이션 
if (true) {
  const $wrap = $(".gnb-wrap>a");
  const $gnb = $("header .gnb");
  const $lnb = $gnb.find(".lnb");
  const $bg_lnb = $(".lnb-wrap");

  const navFadeIn = function () {
    $gnb.stop().slideDown(50);
  };


  $wrap.on("click", function () {
    navFadeIn();
  });
}

if (true) {
  const $wrap = $(".gnb-wrap");
  const $gnb = $(".gnb>.type");
  const $lnb = $gnb.find(".lnb");
  const $bg_lnb = $(".lnb-wrap");

  $gnb.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $gnb.index(this);

    $lnb.eq(nowIdx).fadeIn().siblings();
    // $lnb.eq(nowIdx).slideUp().siblings();

    $gnb.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  });

  $lnb.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $lnb.index(this);

    $lnb.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

    $bg_lnb.eq(nowIdx).fadeIn();
  });

    $gnb.on("mouseleave", function (evt) {
      evt.preventDefault();
      $lnb.eq(nowIdx).fadeOut().siblings();
      $bg_lnb.eq(nowIdx).fadeOut();
      $lnb.eq(nowIdx).fadeOut().siblings();
    });
    $wrap.on("mouseleave", function (evt) {
    
      $gnb.parent().fadeOut();
    });

   
}


//슬라이드
if (true) {
  const $slides = $(".slides > .slides-container > p");
  const $indicator = $(".slides > .slides-pagination > li > a");

  const $btnPrev = $(".slides > .slides-navigation.slides-prev");
  const $btnNext = $(".slides > .slides-navigation.slides-next");

  let nowIdx = 0;

  $indicator.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    //슬라이드 처리
    $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);

    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  });

  //다음버튼
  $btnNext.on("click", function (evt) {
    evt.preventDefault();

    if (nowIdx < 5) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    //슬라이드 처리
    $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);

    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  });

  //이전버튼
  $btnPrev.on("click", function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 5;
    }

    //슬라이드 처리
    $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);

    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  });


  
  

}