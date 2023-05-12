$(function(){
    $('.gnb').hover(
        function(){
            $('.gnb').addClass('active')
        },
        function(){
            $('.gnb').removeClass('active') 
        }
    )
    $('.gnb>li').hover(
        function(){
            $('.gnb ul').stop().show()
        },
        function(){
            $('.gnb ul').stop().fadeOut()
        }
    )
    setInterval(function(){
        $('.slider').animate({left:-1200},function(){
            $('.slider a:first').appendTo('.slider')
            $('.slider').css('left','0')
        })
    },3000)
    $('.n_contents li a:first').click(function(){
        $('#modal').addClass('active')
    })
    $('#modal .close').click(function(){
        $('#modal').removeClass('active')
    })
})