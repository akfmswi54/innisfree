
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

  const $btnAuto = $(".slides > .slides-navigation slides-btn pause");

  let intervalKey = null;

  let nowIdx = 0;
  let oldIdx = nowIdx;


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

 //자동재생
 const autoPlay = function () {
  intervalKey = setInterval(function () {
    $btnNext.trigger("click");
  },8000);

  $btnAuto.addClass("pause");
};

const autoStop = function () {
  clearInterval(intervalKey);
  $btnAuto.removeClass("pause");
};
 //재생,정지버튼 이벤트
 $btnAuto.on("click", function (evt) {
  evt.preventDefault();

  if ($(this).hasClass("pause")) {
    autoStop();
  } else {
    autoPlay();
  }
});

//load 이벤트는 브라우저 화면에 모든 컨텐츠가 로딩완료된 시점에 발생
$(window).on("load", function () {
  autoPlay();
});

}

//쇼핑뉴스

if(true){
  const $newsgnb = $(".news-container > .news-iteam > li > a");
  const $bg_lnb = $(".news-container > .news-iteam > li > .news-iteam-list > .prod");


    // $newsgnb.on("click",function(evt){
    //   evt.preventDefault;
    //   if($newsgnb.hasClass('more')){
    //      $newsgnb.addClass('close').removeClass('more');
    //      $newsgnb.css('visibility', 'visible');
    //   }else if($bg_lnb.hasClass('close')){
    //      $bg_lnb.addClass('more').removeClass('close');  
    //      $('li').css('visibility', 'hidden');
    //   }
    // });
    $newsgnb.on("click", function (evt) {
      evt.preventDefault();
  
      nowIdx = $newsgnb.index(this);
  
      $newsgnb.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  
      $bg_lnb.eq(nowIdx).fadeIn();

    });
    // $newsgnb.eq(nowIdx).on("click", function (evt) {
    //   evt.preventDefault();
    //   $bg_lnb.next.fadeOut().siblings();
    //   $bg_lnb.eq(nowIdx).fadeOut();
    //   $bg_lnb.eq(nowIdx).fadeOut().siblings();
    // });
 
}