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



  // 点击返回
  $("#HJ-TP").on("click", function () {
      $("html,body").animate({
          scrollTop: 0
      })
  });


  $('#GWC-TP').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show();
  })









  let index = 0;
  $('.slideprev').on('click', function () {
      index++;
      if (index > $('.aklghajg li').length - 1) {
          index = 0;
      }
      $('.aklghajg li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
      $('.laskgjklaha li').eq(index).addClass("asghaasasggg").siblings().removeClass("asghaasasggg")
  })
  $('.slide-bttn-prev').on('click', function () {
      index--;
      if (index < 0) {
          index = $('.aklghajg li').length - 1;
      }
      $('.aklghajg li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
      $('.laskgjklaha li').eq(index).addClass("asghaasasggg").siblings().removeClass("asghaasasggg")
  })





  var onOff = 1;
  $(".dgjkldhjkb").on('click', function () {
      if (onOff == 1) {
          $('.dgjkldhjkb span').text("收起");
          $('.llfddfjkxcvjjx').css({
              "max-height": "none"
          })
          onOff = 0;
      } else {
          $('.dgjkldhjkb span').text(" 展开全部 v");
          $('.llfddfjkxcvjjx').css({
              "max-height": 265
          })
          onOff = 1;
      }
  })


  $('.groupkdjs').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show()
  })
  $('.shfhdfhh').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show()
  })
  $('.sfgfgsdds').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show()
  })

  $('#fghfbf').on('click', function () {
      $('.dlkzh').show();
      $('.zzc').show()
  })
  $(' #ghjkgj').on('click', function () {
      $('#ghjkgj').hide()
      $('.fdhhfgh').show()
      $('.groupkdjs').addClass("sdjkghsdjg")
      $('.subgroreference a').addClass('jtyhujbj')
      $(".kgerjgdfjhf").addClass('jfkdhgdfgh')
      $('.shfhdfhh ').addClass("sdjkghsdjg")
      $('.shfhdfhh span').addClass("jtyhujbj")
  })
  $(' .fdhhfgh').on('click', function () {
      $('#ghjkgj').show()
      $('.fdhhfgh').hide()
      $('.subgroreference a').removeClass('jtyhujbj')
      $(".kgerjgdfjhf").removeClass('jfkdhgdfgh')
      $('.groupkdjs').removeClass("sdjkghsdjg")
      $('.shfhdfhh').removeClass("sdjkghsdjg")
      $('.shfhdfhh span').removeClass("jtyhujbj")
  })