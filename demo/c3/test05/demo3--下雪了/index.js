(function () {

    function init(num) {
        var sky = $('.sky');
        var arr = [];
        var nums = 0;
        var times = null;
        for (var i = 0; i < num; i++) {
            var img = createDom();

            sky.append(img);
            arr.push(img);
        }
        times = setInterval(function(){
            arr.forEach(function(ele, index){
                ele.find('img').css({
                    transform: 'rotate(' + (index + nums) + 'deg)'
                })
            })
            nums ++;
        }, 16.7)
    }

    function createDom() {
        var width = $(window).width();

        var img = $('<div><img src="./image/snow' + (Math.random() - 0.5 > 0 ? 1 : 2) + '.png"></div>');
        img.css({
            position: 'absolute',
            left: random(0, width) + 'px',
            top: '-50px',
            animation: 'drop infinite',
            animationDuration: random(4, 10) + 's',
            animationDelay: random(0, 5) + 's'
        })
        return img;
    }

    function random(s, l) {
        num = s + Math.ceil(Math.random() * (l - s) * 10) / 10;
        return num;
    }

    init(100);
}())