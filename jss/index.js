NProgress.configure({ showSpinner: false });
$(window).ajaxStart(function () {
    //只要使用的ajax就会执行这个方法开启进度条
    NProgress.start();
});
$(window).ajaxComplete(function () {
    //结束进度条
    NProgress.done();
});
$(function () {
    index=0
    //页面一加载就请求一次
    myAjax('php/json.php','#tbody')
    //侧边栏的显示
    $('.menu .child').slideToggle().children('a:first-child').addClass('blue');
    $('[data-menu]').on('click',function () {
        $('.ad_aside').toggle();
        $('.ad_section').toggleClass('menu');
    });
    $('.menu [href="javascript:;"]').on('click',function () {
        $(this).siblings('.child').slideToggle();
    })
    //添加笔记
    $('#btn').click(function(){
      // $('.modal-body').html(`
      // `)

    })
    //请求笔记列表
    $('.child a').on('click', function () {
        $(this).addClass('blue').siblings().removeClass('blue')
      index = $(this).index()
      console.log($(this).index())
      console.log(new Date().getTime())
      myAjax('php/json.php','#tbody')
    })
    //弹出模态框，请求的笔记内容
    $('#tbody').on('click',function(e){
      var target=e.target
              // console.log(target.nodeName)
        //  console.log(e)
        //  console.log(target.parentElement.indexOf())
        // console.log($(this))
        // console.log($(this).text())
        if(target.nodeName.toLowerCase()=='td'){
          console.log($(target).parent().index())
          $(target).parent().addClass('blue').siblings().removeClass('blue')
        // console.log(target.nodeName)
        // console.log(e)
        // console.log(target)
        // console.log($(this).index())
        // console.log($(this))
        var content=target.innerText
        console.log(target.innerText)
        $('#note-body').html('')
        $.get('php/list.php', {
          text: content,
          time: new Date().getTime()
      },function(res){
          // console.log(res)
          if(res===''){
            $('#note-body').html('<h4>没有笔记</h4>')
          }else{
            $('#note-body').html(res)
          }
      })
      }
    })
})

var myAjax=function(url,target ){
  $.getJSON(url, {
    id: index+1,
    time: new Date().getTime()
  }, function (res) {
    console.log(res)
    var context = {
      comments: res
    }
    // 模板引擎，渲染数据
    var html = template('tmpl', context)
    $(target).html(html)
  })
}