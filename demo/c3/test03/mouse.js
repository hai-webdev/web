(function () {
    var init = function () {

        $('.wrapper').on('mousedown', mouseDown);

        function mouseDown(e) {
            var curX = e.clientX,
                width = $('.content', '.wrapper').width(),
                curLeft = parseInt($('.content').css('transform').split(', ')[4]);

            $(document).on('mouseup', mouseUp);
            
            function mouseUp(e) {
                var lastX = e.clientX;
                if (lastX == curX) {
                    return false;
                }
                if (lastX > curX && curLeft < 0) {
                    $('.content').css({
                        transform: 'translate(' + (curLeft + width) + 'px)',
                        transition: '1s'
                    })
                } else if (lastX < curX && curLeft > -1500) {
                    $('.content').css({
                        transform: 'translate(' + (curLeft - width) + 'px)',
                        transition: '1s'
                    })
                }
                $('.wrapper').off('mousedown');
                $(document).off('mouseup');
            }
            setTimeout(function () {
                $('.wrapper').on('mousedown', mouseDown);

            }, 1200)
        }




    }





    init();
}())