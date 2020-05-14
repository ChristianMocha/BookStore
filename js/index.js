$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $('.layer1').css({
        width:(52 + scroll/-2) + '%',
        left:scroll/-2+ '%',
        left:23.2 + '%'
    })
    $('.layer2').css({
        width:(51 + scroll/-2) + '%',
        right:scroll/2+ '%',
        right: -1 + '%'
    })
    $('.text').css({
        top: - scroll/20 + '%'
    })
    

})