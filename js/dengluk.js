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
  $('#ssan').on('blur', function () {
      $('.resou').hide();
      $('.zjss').hide();
      $('#zjsscbg').css({
          "border": "none"
      });
      $('#ssan').val("英雄联盟")
      $('#ssjlk-1-xs').hide()
      $(".zjss-zjyc").hide()
  })

  // 搜索框记录
  $(() => {
      $('#djnjnqdl').on('click', () => {

          if ($('#ssan').val().trim() == '') {
              return
          };
          if ($('#zjsscbg').children().length == 0) {
              $('.zjss-1').show();
              $('.zjss-2').show();
          };

          $('#zjsscbg').prepend(`
        <li>${$('#ssan').val()}<img src="./img/del.png" alt=""></li>

        <li><a href='#'>${$('#ssan').val()}</a><i></i></li>
        `);
          $('#ssan').val('');

          $('#zjsscbg>i').on('click', (e) => {
              $(e.target).parent().remove();

              if ($('#zjsscbg').children().length == 0) {
                  $('.zjss-1').hide();
                  $('.zjss-2').hide();
              };
          });

      });

      $('.zjss-1').on('click', () => {
          $('#zjsscbg').children().remove();
          $('.zjss-1').hide();
          $('.zjss-2').hide();
      });

  });