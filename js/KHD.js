  //登录框框
  $('.titleheader-3-3').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show();
  })
  $('.dlks-3').on('click', function () {
      $('.dlkzh').hide();
      $('.zzc').hide();
  })
  // 微信的登录一面
  $('#diji2').on('click', function () {
      $('.dlkx').hide();
      $('.zhmmdl').hide()
      $('.wxdlk').show()
      $('#diji1').css({
          "border-bottom": "none",
          "background-position-x": -125
      })
      $('#diji2').css({
          "border-bottom": "4px solid #f9b011",
          "background-position": "-223px 0",
          "left": "60%"
      })
  })
  // QQ的登录一面
  $('#diji1').on('click', function () {
      $('.wxdlk').hide();
      $('.dlkx').show()
      $('#diji2').css({
          "border-bottom": "none",
          "background-position-x": -189,
          "left": "50%"
      })
      $('#diji1').css({
          "border-bottom": "4px solid #f9b011",
          "background-position": "-157px  0",
      })
  })



  $('#lsxt1').on('focus', function () {
      $('#lsxt1').css({
          "border": "1px solid #a0d4ff"
      })
  })
  $('#lsxt1').on('blur', function () {
      $('#lsxt1').css({
          "border": "1px solid #d6d6d6"
      })
  })
  $('#lsxt2').on('focus', function () {
      $('#lsxt2').css({
          "border": "1px solid #a0d4ff"
      })
  })
  $('#lsxt2').on('blur', function () {
      $('#lsxt2').css({
          "border": "1px solid #d6d6d6"
      })
  })

  $('#ksanqdl').on('click', function () {
      $('.zhmmdl').hide()
      $('.dlkx').show()
  })
  $('#zhmmdl').on('click', function () {
      $('.zhmmdl').show()
      $('.dlkx').hide()
  })

  $('#ssan').on('focus', function () {
      $('.resou').show();
      $('.zjss').show();

      $('#zjsscbg').css({
          "border": "1px solid #bfbfbf",
          "border-bottom": " none"
      });
      $('#ssan').val(" ")
      $('#ssjlk-1-xs').show()
      $(".zjss-zjyc").show()
  })

  $('.ssjlk').on('mouseleave', function () {
      $('.resou').hide();
      $('.zjss').hide();
      $('#zjsscbg').css({
          "border": "none"
      });
      $('#ssjlk-1-xs').hide()
      $(".zjss-zjyc").hide()
  })


  $('#xssplol').on('click', function () {
      $('.LOLNIUBI').show();
      $('#xssplol').hide()
  })




  //   整个界面的动画效果

  $(function () {
      // 滚动事件
      $(document).scroll(function () {
          // 各楼层高度
          let HDtop = $(document).scrollTop();
          let RyugaoS = $('.app-scene-1').offset().top - 80;
          let PHBpbang = $('.app-scene-2').offset().top - 200;
          let DDTJgm = $('.app-scene-3').offset().top - 200;
          let ZJGXuijg = $('.app-scene-4').offset().top - 200;
          let CSZQcsfw = $('.app-scene-5').offset().top - 200;
          if (CSZQcsfw <= HDtop) {
              $('.tui-fr-container-5').show();
              //   $('.tui-fr-container-3').hide();
              //   $('.tui-fr-container-2').hide();
              //   $('.tui-fr-container-1').hide();
              //   $('.tui-fr-container').hide();
          } else if (ZJGXuijg <= HDtop) {
              //   $('.tui-fr-container-5').hide();
              $('.tui-fr-container-3').show();
              //   $('.tui-fr-container-2').hide();
              //   $('.tui-fr-container-1').hide();
              //   $('.tui-fr-container').hide();
          } else if (DDTJgm <= HDtop) {
              //   $('.tui-fr-container-5').hide();
              //   $('.tui-fr-container-3').hide();
              $('.tui-fr-container-2').show();
              //   $('.tui-fr-container-1').hide();
              //   $('.tui-fr-container').hide();
          } else if (PHBpbang <= HDtop) {
              //   $('.tui-fr-container-5').hide();
              //   $('.tui-fr-container-3').hide();
              //   $('.tui-fr-container-2').hide();
              $('.tui-fr-container-1').show();
              //   $('.tui-fr-container').hide();
          } else if (RyugaoS <= HDtop) {
              //   $('.tui-fr-container-5').hide();
              //   $('.tui-fr-container-3').hide();
              //   $('.tui-fr-container-2').hide();
              //   $('.tui-fr-container-1').hide();
              $('.tui-fr-container').show();
          }
      })
  })