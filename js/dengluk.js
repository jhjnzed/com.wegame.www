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





  //   轮播图切换事件
  // 定义变量
  var $num = 0;
  // 功能2：根据上面的图片创建小圆点
  // 2.3 默认第一个是红色的背景
  //   $('.lbtcfwz-wzdyh-1').eq(0).addClass('current')


  // 功能3：鼠标移入每个小圆点，对应的小圆点要添加currentx，而且上面的图也在跟着切换

  // 3.1 先要给小圆点注册事件
  $('.lbtcfwz-yc li').on('mouseenter', function () {
      // 获取当前的索引
      var $index = $(this).index()
      // 直接赋值给$num 
      $num = $index

      console.log($(".bjsgd> strong").index())
      //   console.log($num)

      // 3.2 给当前的小圆点要添加currentx类名
      //   li 
      $(".bjsgd").eq($num).addClass("gbkgbzddyd").siblings().removeClass('gbkgbzddyd')
      //   span   p 
      $('.lbtcfwz-wzdyh-1').eq($num).addClass("currentx").parents('bjsgd').siblings().find("lbtcfwz-wzdyh-1").removeClass("currentx")
      $('.lbtcfwz-wzdyh-tlzl').eq($num).addClass("currentx").parents('bjsgd').siblings().find("lbtcfwz-wzdyh-tlzl").removeClass("currentx")
      //   //   hover
      $('.lbtcfwz-wzdyh-2').eq($num).addClass("njscdysx").parents('bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("njscdysx")
      $('.yjlsxd').eq($num).addClass("yjlsxdx").parents('bjsgd').siblings().find(".yjlsxdx").removeClass("njscdysx")
      $('.yydgbndys').eq($num).addClass("yydgbndysx").parents('bjsgd').siblings().find(".yydgbndysx").removeClass("yydgbndys")

      // 3.3 上面的图也在跟着切换
      $('.dlbnbysxcl-cklm').eq($index).stop().fadeIn().siblings().stop().fadeOut()
  })

  // 功能四:点击右箭头，切换下一张图片，同时下面的小圆点也在跟着切换加类名

  // 4.1 获取右箭头，添加事件
  $('.yjtyd-right').on('click', function () {
      // 4.2 切换下一张
      $num++;
      // 进行判断是不是最后一张
      if ($num == $('.dlbnbysxcl-cklm').length) {
          $num = 0;
      }
      $('.dlbnbysxcl-cklm').eq($num).stop().fadeIn().siblings().stop().fadeOut()
      // 4.3 小圆点跟着切换
      $('.bjsgd').eq($num).addClass("gbkgbzddyd").siblings().removeClass('gbkgbzddyd')

      // 样式也动
      //   $('.lbtcfwz-wzdyh-1').eq($num).addClass("currentx").parents('bjsgd').siblings().find("lbtcfwz-wzdyh-1").removeClass("currentx")
      //   $('.lbtcfwz-wzdyh-tlzl').eq($num).addClass("currentx").parents('bjsgd').siblings().find("lbtcfwz-wzdyh-tlzl").removeClass("currentx")
      //   //   hover
      //   $('.lbtcfwz-wzdyh-2').eq($num).addClass("njscdysx").parents('bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("njscdysx")
      //   $('.yjlsxd').eq($num).addClass("yjlsxdx").parents('bjsgd').siblings().find(".yjlsxdx").removeClass("njscdysx")
      //   $('.yydgbndys').eq($num).addClass("yydgbndysx").parents('bjsgd').siblings().find(".yydgbndysx").removeClass("yydgbndys")
  })


  // 功能六：自动轮播
  var timer = setInterval(function () {
      $('.yjtyd-right').click()
  }, 2000)

  // 功能七： 移动到slider上面定时器删除
  $('.dlbnbys')
      .on('mouseenter', function () {
          // 移除定时器
          clearInterval(timer)
          // 显示
          $('.arrow').show();
      })
      .on('mouseleave', function () {
          timer = setInterval(function () {
              $('.yjtyd-right').click()
          }, 2000)
          // 隐藏
          $('.arrow').hide();
      })



  //   关注点击事件
  $('.widget-gcard-infobtn-gs').on('click', function () {
      $('.widget-gcard-infobtn-gs-ygz').show();
      $('.widget-gcard-infobtn-gs-gz').hide();
  })
  $('.widget-gcard-infobtn-gs').on('dblclick', function () {
      $('.widget-gcard-infobtn-gs-ygz').hide();
      $('.widget-gcard-infobtn-gs-gz').show();
  })