$(function () {
  var k = $(window).height() // 当前屏幕的高度
  var flag = false
  $('.next').click(function (event) {
    $.fn.fullpage.moveSectionDown()
  })
  $('.myPhoto').click(function (event) {
    $.fn.fullpage.moveTo(4)
  })
  $('#fullpage').fullpage({
    navigation: true,
    keyboardScrolling: true,
    scrollingSpeed: 1000,
    afterLoad: function (anchorLink, index) {
      // 第二屏幕开始
      if (index == 1) {
        $('.next').fadeIn()
      }
      if (index == 2) {
        $('.next').fadeOut()
        $('.messages img')
          .slideDown(300, function () {
            $('.messages p').animate({
                'opacity': 1
              }, 1500,
              function () {
                $('.next').fadeIn()
                flag = true
              }
            )
          })
      }
    },
    // 第二屏幕结束
    // 离开动画
    onLeave: function (index, nextIndex, direction) {
      $('.next').fadeOut()
      // 第三屏幕开始
      if (index === 2 && nextIndex === 3 && flag === true) {
        $('.section2 .man').animate({
            'bottom': '-585px',
            'left': '340px'
          },
          1500,
          function () {
            $('.section3 .box').animate({
                'bottom': '210',
                'left': '485px',
                'width': '90px'
              },
              1000,
              function () {
                $('.section3').animate({
                    'backgroundPositionX': '100%'
                  },
                  4000, "linear",
                  function () {}
                )
                setTimeout(
                  $('.section3 .h5')
                  .show()
                  .animate({
                      'bottom': '220px',
                      'left': '38%',
                      'width': '20px'
                    },
                    1000,
                    function () {
                      $(this).hide();
                      setTimeout(
                        $('.section3 .c3')
                        .show()
                        .animate({
                            'bottom': '220px',
                            'left': '38%',
                            'width': '20px'
                          },
                          1000,
                          function () {
                            $(this).hide()
                            setTimeout($('.section3 .js')
                              .show()
                              .animate({
                                  'bottom': '220px',
                                  'left': '38%',
                                  'width': '20px'
                                }, 1000,
                                function () {
                                  $(this).hide()
                                  $(".next").fadeIn()
                                }), 3500)
                          }
                        ), 3500)

                    }
                  ), 1500)



              }
            )
          }
        )
      }
      // 第三屏幕结束
      // 第四屏幕开始
      $('.callMe').hover(function () {
        $('.call-a').toggle() //  toggle  显示和隐藏的切换
      })
      // 大手跟随鼠标移动
      $(document).mousemove(function (event) {
        var x = event.pageX + 10 - $('.hand04').width() / 2 // 获得鼠标在页面中的x坐标
        var y = event.pageY + 10 // 获得鼠标在页面中的y坐标
        var minY = k - 449
        // 把 鼠标在页面中的坐标 给  hand 大手 left  top
        if (y < minY) {
          y = minY
        }
        $('.hand04').css({
          'left': x,
          'top': y,
          'zIndex':'2333'
        })
      })
      $('.toTop').click(function (event) {
        $.fn.fullpage.moveTo(1)
        $('img, .move').attr('style', '')
      })


    }
  })
})