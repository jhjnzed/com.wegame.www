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

  // 搜索框记录
  $(() => {
      $('#djnjnqdl').on('click', () => {

          if ($('#ssan').val().trim() == '') {
              return
          };
          if ($('#zjsscbg').children().length == 0) {
              $('.zjss-zjyc').show();
          };

          $('#zjsscbg').append(`


        <li class="on"><a class="active" href='#'>${$('#ssan').val()}</a><i class='scdbjsn'></i></li>
`);
          $('#ssan').val('');

          $('.scdbjsn ').on('click', (e) => {
              $(e.target).parent().remove();

              if ($('#zjsscbg').children().length == 0) {
                  $('.zjss-zjyc').hide();

              };
          });

      });

      $('.zjss-2').on('click', () => {
          $('.zjss-zjyc').siblings().remove();
          $('.zjss-zjyc').hide();
      });
  });




  var nzuideteLeft = $('#nzuidete').position().left;
  var sum = 0;
  $('.YouWantTo').on('click', function () {
      sum -= -342
      $('#nzuidete').css({
          "left": nzuideteLeft + sum,
      })


  })

  $('.startDancing').on('click', function () {
      sum += -342
      $('#nzuidete').css({
          "left": nzuideteLeft + sum,
      })

  })



  $('#tABLI li').click(function () {
    $('.item').hide();
    let index = $(this).index();
    $('.item').eq(index).show();
    $('#tABLI li').eq(index).addClass("yjlsxdx").siblings().removeClass("yjlsxdx")
  })






  $('#ZKQB').on('click', function () {
      $('#YCXSCK').show();
      $('#ZKQB').hide();
      $('#SQQB').show();
  })

  $('#SQQB').on('click', function () {
      $('#YCXSCK').hide();
      $('#SQQB').hide();
      $('#ZKQB').show();
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