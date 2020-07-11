(function(){
    var img = $('img');
    var len = $('img').size();
    var deg = 360 / $('img').size();
    //页面初始化

    function init(){
        img.each(function(index, ele){
            $(ele).css({
                transform: 'rotateY('+ (deg * index) + 'deg) translateZ(300px)',
                transition: 'transform .5s linear ' + (len - 1 - index) * 0.1 + 's',
            })
        })
    }

    function bindEvent(){
        var disX, disY, lastX, lastY, tarX, tarY, rotX = 0, rotY = 0, times;
        $(document).on('mousedown', function(e){
            clearInterval(times)
        //鼠标按下之后获取当前坐标点
            disX = e.clientX;
            disY = e.clientY;
            $(document).on('mousemove', function(e){
                //获取到鼠标移动过程中的每个坐标点
                lastX = e.clientX;
                lastY = e.clientY;

                tarX = lastX - disX;
                tarY = lastY - disY;
                console.log(tarX, tarY, rotX, rotY)
                rotX -= tarY * 0.1;
                rotY += tarX * 0.1;
                $('.box').css({
                    transform: 'rotateX(' + rotX +'deg) rotateY(' + rotY +'deg)'
                })

                disX = lastX;
                disY = lastY;
            })

            $(document).on('mouseup', function(e){
                $(document).off('mousemove');
                times = setInterval(function(){
                //获取到鼠标移动过程中的每个坐标点
                tarX *= 0.8;
                tarY *= 0.8;
                rotX -= tarY * 0.5;
                rotY += tarX * 0.5;
                $('.box').css({
                    transform: 'rotateX(' + rotX +'deg) rotateY(' + rotY +'deg)'
                })
                // disX = lastX;
                // disY = lastY;
                if(Math.abs(tarX) < 0.1 && Math.abs(tarY) < 0.1){
                    clearInterval(times);
                }
                }, 16.8);


            })
            return false;
        })

    }

    init();
    bindEvent();
}())