// 入口函数
$(function () {
    // fullpage调用
    $('#fullpage').fullpage({
        // 为每一屏设置背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed"],
        navigation: true,
        scrollingSpeed: 500,
        verticalCentered: false,
        // 第二屏
        afterLoad: function (anchorLink, index) {
            // console.log(index);
            // 1.判断是不是到了第二屏 
            if (index == 2) { // 1.1 如果是第二屏 
                // console.log(1111)
                // 让空的输入框运动到 已经写好的输入框的位置
                $('.qbh-list-empty').show().animate({
                    right: 500
                }, 1000, function () {
                    // 运动到指定位置之后 让输入框中的字出现
                    $('.qbh-list-empty img:last-child').animate({
                        opacity: 1
                    }, 1000, function () {
                        // 让这个输入框隐藏
                        $('.qbh-list-empty').css('opacity', 0)
                        // 让已经写好的输入框运动到显示器的右上角
                        $('.qbh-list-full').show().animate({
                            width: 150,
                            bottom: 448,
                            right: 338
                        }, 1000)
                        // 沙发列表放大到整个屏幕
                        $('.qbh-list-sofas').animate({
                            width: 441
                        }, 1000, function () {
                            // 标语发生变化
                            $('.qbh-list-tips img:first-child').hide()
                        })
                    })
                })
            }
        },
        // index 是当前节的索引
        // nextindex 下一节的索引
        // direction 方向
        onLeave: function (index, nextIndex, direction) {
            // 离开第二屏 到 第三屏
            if (index == 2 && nextIndex == 3) {
                // console.log(12111);
                // 让第二屏的沙发掉落
                $('.qbh-list-drop').show().animate({
                    bottom: -($(window).height() - 250),
                    width: 207,
                    left: 370
                }, 1000, function () {
                    $('.qbh-buy-main div:last-child').show();
                })
            }

            // 离开第三屏到第四屏
            if (index == 3 && nextIndex == 4) {
                // 找到第三屏的沙发(不是第二屏掉落的) 让第二屏的沙发隐藏 让第三瓶的沙发掉落
                // 1.让第二屏掉落的沙发隐藏起来
                $('.qbh-list-drop').css('opacity', 0)
                // 2.让第三屏隐藏的沙发显示出来
                $('.qbh-buy-rotate-sofa').show().animate({
                    bottom: -($(window).height() - 240),
                    left: 420
                }, 1000, function () {
                    // 让这个元素隐藏
                    $(this).hide();
                    // 让购物车中的沙发显示
                    $('.qbh-info-cart img:last-child').show()
                    // 让购物车走
                    $('.qbh-info-cart').animate({
                        right: -2000
                    }, 2000, function () {
                        $('.qbh-info-profile').animate({
                            opacity: 1
                        }, 1000, function () {
                            $('.qbh-info-profile img:last-child').animate({
                                opacity: 1
                            }, 1000);
                            $('.qbh-info-tips img:last-child').animate({
                                opacity: 1
                            }, 1000)
                        });

                    })
                })
            }
            // 离开第四屏到第五屏
            if (index == 4 && nextIndex == 5) {
                // 手往前移动 鼠标按键的颜色变深
                $('.qbh-payment-hands').animate({
                    bottom: -1
                }, 1000, function () {
                    $('.qhb-payment-mouse img:last-child').animate({
                        opacity: 1
                    }, function () {
                        // 鼠标点击完成后 有一个沙发掉落
                        $('.qbh-payment-rotate-sofa').show().animate({
                            bottom: 64,
                            right: 719
                        }, 1000)
                        // 银行卡账单上升
                        $('.pbh-payment-card img:first-child').animate({
                            bottom: 316
                        }, 900)
                    })
                })
            }
            // 离开第五屏到第六屏
            if (index == 5 && nextIndex == 6) {
                // 沙发落下
                $('.pbh-payment-card img:last-child').animate({
                    bottom: -($(window).height() - 600),
                    width: 60
                }, 1000)
                // 快递盒接着
                $('.qbh-delivery-box').show().animate({
                    bottom: 660,
                    left: 763
                }, 900, function () {
                    // 让沙发消失
                    $('.pbh-payment-card img:last-child').css('opacity', 0)
                    // 让快递盒落到车里
                    $(this).animate({
                        bottom: 60,
                        left: 790,
                        width: 1
                    }, 1000, function () {
                        $('.qbh-delivery-box').css('opacity', 0);
                        // 车往前走
                        $('.qbh-delivery').animate({
                            backgroundPositionX: '100%'
                        }, 2000, function () {
                            // 让快递员出来
                            $('.qbh-delivery-man').animate({
                                bottom: 112,
                                right: 717,
                                height: 300
                            }, 2000, function () {
                                // 让门等一秒钟 打开 
                                $('.qbh-delivery-door').hide(0).delay(1000).show(0)

                                // 让小女孩出来
                                $('.qbh-delivery-buyer').hide(0).delay(1500).show(0).animate({
                                    height: 300
                                }, 1000, function () {
                                    $(this).animate({
                                        right: 587
                                    }, 1000, function () {
                                        $('.qbh-delivery-shouhuo').show()
                                    })
                                })
                            })
                        })
                    })
                })
            }
        }
    })
})










$('#hhhjjj').on('click', function () {
    $(".ndklhfdk").show();
    $(".hongsebj").hide();
    $('#hhhjjj').addClass('yasnhi');
    $('#jjjhhh').removeClass("yasnhi");
})
$('#jjjhhh').on('click', function () {
    $(".ndklhfdk").hide();
    $(".hongsebj").show();
    $('#hhhjjj').removeClass('yasnhi');
    $('#jjjhhh').addClass("yasnhi");
})