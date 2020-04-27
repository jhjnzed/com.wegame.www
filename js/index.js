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

  // 功能3：添加currentx，而且上面的图也在跟着切换

  //  先给注册事件
  $('.lbtcfwz-yc li').on('mouseenter', function () {
      // 获取当前的索引
      var $index = $(this).index()
      // 直接赋值给$num 
      $num = $index

      //   console.log($(".bjsgd> strong").index())
      //   console.log($num)

      // 给当前的添加currentx类名
      //   li 
      $(".bjsgd").eq($num).addClass("gbkgbzddyd").siblings().removeClass('gbkgbzddyd')
      //   span   
      $('.lbtcfwz-wzdyh-1').eq($num).addClass("currentx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-1").removeClass("currentx")
      //   p 
      $('.lbtcfwz-wzdyh-tlzl').eq($num).addClass("currentx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-tlzl").removeClass("currentx")
      //   //   hover
      $('.lbtcfwz-wzdyh-2').eq($num).addClass("njscdysx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("njscdysx")

      //   颜色
      $('.lbtcfwz-wzdyh-2').eq($num).addClass("yjlsxdx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("yjlsxdx")
      //   $('.yydgbndys').eq($num).addClass("yydgbndysx").parents('.bjsgd').siblings().find(".yydgbndys").removeClass("yydgbndysx")

      //  上面的图也在跟着切换
      $('.dlbnbysxcl-cklm').eq($index).stop().fadeIn().siblings().stop().fadeOut()
  })


  // 功能四:点击右箭头，切换下一张图片，同时下面的小圆点也在跟着切换加类名

  // 获取右箭头，添加事件
  $('.yjtyd-right').on('click', function () {
      //  切换下一张
      $num++;
      // 进行判断是不是最后一张
      if ($num == $('.dlbnbysxcl-cklm').length) {
          $num = 0;
      }
      $('.dlbnbysxcl-cklm').eq($num).stop().fadeIn().siblings().stop().fadeOut()
      // 4.3 li的变化
      $('.bjsgd').eq($num).addClass("gbkgbzddyd").siblings().removeClass('gbkgbzddyd')
      //   span   p  
      $('.lbtcfwz-wzdyh-1').eq($num).addClass("currentx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-1").removeClass("currentx")
      //   p 
      $('.lbtcfwz-wzdyh-tlzl').eq($num).addClass("currentx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-tlzl").removeClass("currentx")
      //   //   hover
      $('.lbtcfwz-wzdyh-2').eq($num).addClass("njscdysx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("njscdysx")
      // 样式也动
      $('.lbtcfwz-wzdyh-2').eq($num).addClass("yjlsxdx").parents('.bjsgd').siblings().find(".lbtcfwz-wzdyh-2").removeClass("yjlsxdx")
  })


  // 自动轮播
  var timer = setInterval(function () {
      $('.yjtyd-right').click()
  }, 2000)

  //  移动到dlbnbys上面定时器删除
  $('.dlbnbys')
      .on('mouseenter', function () {
          // 移除定时器
          clearInterval(timer)
          // 显示
          //   $('.arrow').show();
      })
      .on('mouseleave', function () {
          timer = setInterval(function () {
              $('.yjtyd-right').click()
          }, 2000)
          // 隐藏
          //   $('.arrow').hide();
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
  $('#shipin-ts').on('click', function () {
      $('#shipin-ts').hide()
  })




  // 小轮播图滚动事件  正式上线的游戏
  //   var x = parseInt($("#xlbtyd").css("left"));

  //   //   console.log(x)
  //   var z = x + 206;
  //   //   var y = 0;
  //   $('.zssxdyx-lrght-right').on('click', function () {
  //       z += 206
  //       //   $('#xlbtyd').css({
  //       //       "left": z,
  //       //       //   transform: translateX(126px); 动画
  //       //   })
  //       $('#xlbtyd').css("left", z);

  //       //   console.log(x);

  //       //   console.log(z)


  //   })

  //   热点预告
  var xlbtydLeft = $('#xlbtyd').position().left;
  var sum = 0;
  $('.zssxdyx-lrght-right').on('click', function () {
      sum -= 412
      $('#xlbtyd').css({
          "left": xlbtydLeft + sum,
      })


  })

  $('.zssxdyx-lrght-left').on('click', function () {
      sum += 412
      $('#xlbtyd').css({
          "left": xlbtydLeft + sum,
      })

  })

  // 右箭头
  //   if ($('#xlbtyd').position().left == -824) {
  //       $('.zssxdyx-lrght-right').css({
  //           "cursor": "default",
  //           "pointer-events": "none",
  //           "background": "rgba(0,0,0,.05)"
  //       })
  //       $('.zssxdyx-lrght-left').css({
  //           "cursor": "pointer",
  //           "pointer-events": "auto",
  //           "background": "rgba(0, 0, 0, .15)"
  //       })
  //   }
  // ←箭头
  //     //   if ($('#xlbtyd').position().left == 412) {
  //     //       $('.zssxdyx-lrght-left').css({
  //     //           "cursor": "default",
  //     //           "pointer-events": "none",
  //     //           "background": "rgba(0,0,0,.05)"
  //     //       })
  //     //       $('.zssxdyx-lrght-right').css({
  //     //           "cursor": "pointer",
  //     //           "pointer-events": "auto",
  //     //           "background": "rgba(0, 0, 0, .15)"
  //     //       })
  //     //   }


  //   小轮播切换
  //   排行榜
  if ($('.zxlbzsr-bg').position().left == 0) {
      $('.disabled').css({
          "cursor": "default",
          "pointer-events": "none",
          "background": "rgba(0,0,0,.05)"
      })
      $('.disabled-right').on('click', function () {
          $('.zxlbzsr-bg').css({
              "left": -1020,

          })

          //   if ($('.zxlbzsr-bg').position().left == -1020) {
          $('.disabled-right').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.disabled').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })

      $('.disabled').on('click', function () {
          $('.zxlbzsr-bg').css({
              "left": 0,
          })

          //   if ($('.zxlbzsr-bg').position().left == 0) {
          $('.disabled').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.disabled-right').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })
  }



  //   蛋蛋君荐游戏

  if ($('.tui-slider-list').position().left == 0) {
      $('.prehoutui').css({
          "cursor": "default",
          "pointer-events": "none",
          "background": "rgba(0,0,0,.05)"
      })
      $('.nextqianjin').on('click', function () {
          $('.tui-slider-list').css({
              "left": -160,

          })

          //   if ($('.tui-slider-list').position().left == -160) {
          $('.nextqianjin').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.prehoutui').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })

      $('.prehoutui').on('click', function () {
          $('.tui-slider-list').css({
              "left": 0,
          })

          //   if ($('.tui-slider-list').position().left == 0) {
          $('.prehoutui').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.nextqianjin').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })
  }




  if ($('#nzuidete').position().left == 0) {
      $('.YouWantTo').css({
          "cursor": "default",
          "pointer-events": "none",
          "background": "rgba(0,0,0,.05)"
      })
      $('.startDancing').on('click', function () {
          $('#nzuidete').css({
              "left": -1030,

          })

          //   if ($('#nzuidete').position().left == -160) {
          $('.startDancing').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.YouWantTo').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })

      $('.YouWantTo').on('click', function () {
          $('#nzuidete').css({
              "left": 0,
          })

          //   if ($('#nzuidete').position().left == 0) {
          $('.YouWantTo').css({
              "cursor": "default",
              "pointer-events": "none",
              "background": "rgba(0,0,0,.05)"
          })
          $('.startDancing').css({
              "cursor": "pointer",
              "pointer-events": "auto",
              "background": "rgba(0, 0, 0, .15)"
          })
          //   }
      })
  }













  // 点击侧边栏跳转

  let HDtop = $(document).scrollTop();
  let RyugaoS = $('#Ryugao').offset().top;
  let PHBpbang = $('#PHB-pbang').offset().top;
  let DDTJgm = $('#DDTJ-gm').offset().top;
  let ZJGXuijg = $('#ZJGX-zuijg').offset().top;
  let CSZQcsfw = $('#CSZQ-csfw').offset().top;
  $('#RDYG-dh').on('click', function () {
      $("html,body").animate({
          scrollTop: RyugaoS
      })
  })
  $('#PHB-TP').on('click', function () {
      $("html,body").animate({
          scrollTop: PHBpbang
      })
  })

  $('#DDJJGM-TP').on('click', function () {
      $("html,body").animate({
          scrollTop: DDTJgm
      })
  })
  $('#SJGL-TP').on('click', function () {
      $("html,body").animate({
          scrollTop: ZJGXuijg
      })
  })
  $('#TGP-TP').on('click', function () {
      $("html,body").animate({
          scrollTop: CSZQcsfw
      })
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



