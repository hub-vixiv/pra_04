// js
$(function() {
  $('.open_btn').on('click',function(){// .btnをクリックすると〜
      $('.open_btn').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.header_menu').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.nav').toggleClass('active');// .btnにcloseというクラスが追加される
      // $('.nav').fadeToggle(500);// navの表示・非表示切り替わる
    });
  });

//出てきたメニューをクリックした時
$('nav').click(function(){
    $(this).toggleClass('active');
    $('.open_btn').toggleClass('active')
    // $('.h1').toggleClass('active')
});

 //トップへ戻るボタンを途中で表示
 $(function() {
  // 変数にクラスを入れる
  var btn = $('.to_pagetop');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 700) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});


  let fadeUpTarget = document.querySelectorAll('.voice_content');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeUpTarget.length; i++){
      const rect = fadeUpTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 150) {
        fadeUpTarget[i].classList.add('scroll_Up');
      }
    }
  });
  

//スクロールでふわっと表示
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime_left(){
    // ふわっ
    $('.from_left').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('.in_left');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
  }
function fadeAnime_right(){
    // ふわっ
    $('.from_right').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('in_right');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
  }
  
  画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime_left();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime_right();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    // $(window).on('load', function(){
    //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
    // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  