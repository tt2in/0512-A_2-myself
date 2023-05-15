$(function(){
    $('.gnb>li').hover(function(){
        $(this).find('ul').stop().fadeIn()
    },function(){
        $(this).find('ul').stop().fadeOut()
    })
    var index = 0
    $('.slider img').eq(0).show()
    setInterval(function(){
        var indexname = (index+1)%3
        $('.slider img').eq(index).fadeOut()
        $('.slider img').eq(indexname).fadeIn()
        index = indexname
    },3000)
    $('.tab_title h3').click(function(){
        $('.tab_title h3').removeClass('on')
        $(this).addClass('on')
        $('.tab_contents ul').css('display','none')
        $('.tab_contents ul').eq($(this).index()).css('display','block')
    })
    $('.notice li:first').click(function(){
        $('#modal').addClass('active')
    })
    $('#modal .close').click(function(){
        $('#modal').removeClass('active')
    })
})