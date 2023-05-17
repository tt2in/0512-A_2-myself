$(function(){
    $('.gnb').hover(function(){
        $('.gnb').addClass('active')
        $('.gnb ul').stop().fadeIn()
    },function(){
        $('.gnb ul').stop().fadeOut()
        $('.gnb').removeClass('active')
    })
    var index =0
    $('.slider img').eq(0).show()
    setInterval(function(){
        var indexnext = (index +1)%3
        $('.slider img').eq(index).fadeOut()
        $('.slider img').eq(indexnext).fadeIn()
        index = indexnext
    },3000)
    $('.n_contents li:first').click(function(){
    $('#modal').addClass('action')
})
    $('#modal .close').click(function(){
    $('#modal').removeClass('action')
})
})