(function(){
    function slideUp() {
        $('.wrapper ul li').css('transform', 'translateY(100%)');
        setTimeout(function(){
            $('.wrapper ul li').css('transform', 'translateY(0)');
        }, 200)
    }

    function myClick(){
        $('.wrapper ul li').on('click', function(e){
            $(this).parents().addClass('content').end().addClass('item');
            setTimeout(function(){
                $('.wrapper .content li .header').css('opacity', '1')
            }, 1000)
        })

        $('.close').on('click', function(e){
            $('.wrapper ul li').parents().removeClass('content').end().removeClass('item');
            return false;
        })
    }

    slideUp();
    myClick();
}())