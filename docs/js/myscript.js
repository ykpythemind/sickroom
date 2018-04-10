



$(document).ready(function() {


  $('head').append(
  '<style type="text/css">body {display:none;}'
  );
  $(window).load(function() {
    $('body').fadeIn(600, function() {
    });
  });


  var he = $('#header');

    //navの位置
    var headEnd = he.height() - 50;

    var nav= $('.navouter');

    //スクロールするたびに実行  -> 後段にいどうした
    $(window).scroll(function () {

    });


  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
    //  navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll);
    $window.on('resize', resize);
    $popoverLink.on('click', openPopover);
    $document.on('click', closePopover);
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {

});

  function resize() {
  //  $body.removeClass('has-docked-nav')
  //  navOffsetTop = $nav.offset().top
  //  onScroll()
  }

  function onScroll() {

    var winTop = $window.scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    //だけどもう少しうごかしたらかえちゃう
    if (winTop >= headEnd) {
        nav.addClass('navnyu');
    } else if (winTop <= headEnd) {
        nav.removeClass('navnyu');
    }

    $('#navouter').offset({ top: winTop+30, right: 30 });

    //参考 --
  /*  if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
*/


  }


  init();



});




  //smooth scroll --------------------------
  $(function(){
     // #で始まるアンカーをクリックした場合に処理
     $('.scroll').click(function() {
        // スクロールの速度
        var speed = 1000; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
  			if (window.matchMedia('screen and (max-width:767px)').matches) {
  				var position = target.offset().top -  70 ;
  			}else{
        var position = target.offset().top - 100;
  		}
  		// スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'easeOutQuint');
        return false;
     });
  });



$(window).load(function(){


  /*    a= -1 * nav.outerWidth(true);
      console.log(a);
      nav.css('right',a);*/

});



//retina ------------------------- @2xがついたファイルに差し替えてくれる
$(function(){
	var retinaCheck = window.devicePixelRatio;
	if(retinaCheck >= 2) { // Retinaディスプレイのときを分岐させている
		$('img.retina').each( function() {
			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
			$(this).attr('srcset', retinaimg + " 2x");
		});
	}
});
