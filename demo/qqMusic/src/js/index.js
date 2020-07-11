
(function () {
    ajax();
    cutSong();
    bar();
    var durTime;
    var dataList;
    var myData;
    var dataI = 0;
    var len;
    var times;
    var i, rotateI = 0;
    //ajax获取数据
    function ajax() {
        $.ajax({
            type: 'GET',
            url: '../mock/data.json',
            success: function (data) {
                myData = data;
                len = data.length;
                dataList = data;
                renderDom(dataList[dataI]);
            }
        })
    }
    //数据渲染
    function renderDom(dataList) {
        var textStr = '',
            listStr = '';
        //插入图片
        $('header').find('.img').find('img').attr('src', '../img/' + dataList.image);
        //插入音乐
        $('.audio').find('audio').attr('src', '../img/' + dataList.audio);
        //插入歌曲信息
        textStr = '<h1>' + dataList.song + '</h1>\
                        <p>' + dataList.singer + '</p>\
                        <p>' + dataList.album + '</p>';
        $('.text').html(textStr);
        //添加下方menuList
        myData.forEach(function(ele){
            listStr += '<li>' + ele.song + '</li>'
        })
        $('.menu_list').html(listStr);
        //判断下方图标的样式
        if (dataList.isLike == true) {
            $('nav').find('ul').find('li').eq(0).addClass('like_active');
        } else {
            $('nav').find('ul').find('li').eq(0).removeClass('like_active');
        }
        //插入歌曲时长
        $('.time_c').html('0:00');
        $('.time_z').html( parseInt(dataList.duration / 60) + ':' + dataList.duration % 60);
        //插入高斯模糊的背景图片
        // var img = new Image();
        // img.src = '../img/' + dataList.image;
        // img.onload = function(){
        //     // img.src = ;
        //     root.blurImg(img, $('body'));
        //     // $('body').append(img)
        //     root.render = function(myData){
        //         renderImg(myData, image)
        //     }
        // }

        $('body').css({
            backgroundImage: 'url(../img/' + dataList.image + ')',

        })

    }
    //按钮操作
    function cutSong() {
        $('.prev_cut').on('click', function () {
            if (dataI == 0) {
                dataI = len - 1;
            } else {
                dataI--;
            }
            renderDom(dataList[dataI]);
            play();
            rotateI = 0;
        })
        $('.next_cut').on('click', function () {
            if (dataI == len - 1) {
                dataI = 0;
            } else {
                dataI++;
                rotateI = 0;
            }
            renderDom(dataList[dataI]);
            play();
        })
        //点击播放按钮
        $('li.play').on('click', function () {
            play();
        })

        $('li.list').on('click',function(){
            $('.menu_list').slideToggle()
        })

        $('.menu_list').on('click',function(e){
            var index = $(e.target).index();
            renderDom(myData[index]);
            play();
            $('.menu_list').slideUp()
        })
    }
    function play() {
        clearInterval(times);
        i = rotateI;
        if ($('audio')[0].paused) {
            $('audio')[0].play();
            $('li.play').addClass('play_active');
            times = setInterval(function () {
                rotateI = i += 0.05;
                $('.img').css({
                    transform: 'rotate(' + rotateI + 'deg)'
                })

            }, 16.7)

        } else {
            $('audio')[0].pause();
            $('li.play').removeClass('play_active');
        }
        music();
    }
    //进度条处理
    function music(){
        var listLeft;
        var time_c;
        durTime = setInterval(function(){
            listLeft = ( $('audio')[0].currentTime / $('audio')[0].duration ) * 100;
            $('.list_z').find('.list_d').css({
                left: listLeft + '%'
            })
            $('.list_z').find('.list_w').css({
                width: listLeft + '%',
            })
            time_c = parseInt(parseInt($('audio')[0].currentTime) / 60) + ':' + parseInt($('audio')[0].currentTime) % 60;
            $('.time_c').html(time_c);
        },1000)

    }
    //进度条点击操作
    function bar(){
        $('.list_z').on('click', function(e){
            var myLeft = (e.clientX - this.offsetLeft) / $('.list_z').width();
            $('audio')[0].currentTime = myLeft * $('audio')[0].duration;
        })
        music();
    }

}())