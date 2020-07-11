(function(){
    init();
    function init(){
        var wrapper = document.getElementsByClassName("textCon")[0];
        var wrapWidth = wrapper.offsetWidth;
        // 数字越小，小红心越多
        var heartNum = parseInt(wrapWidth / 10);
        var wrapHeight = wrapper.offsetHeight;
        for(var i = 0; i < heartNum; i ++){
            var item = document.createElement("div");
            item.classList = "item";
            // 设置红色的大小（随机数范围）
            var widthAndHeight = random(6, 14);
            item.style.width = widthAndHeight + "px";
            item.style.height = widthAndHeight + "px";
            // 设置红心距离文字底部的距离（随机数）
            item.style.bottom = random(10, 50) + "px";
            item.style.left = random(20, wrapWidth - 20) + "px";
            // 设置延迟时间（随机数）
            item.style.animationDelay = random(0, 40) / 10 + "s";
            item.style.opacity = "0";
            wrapper.appendChild(item);
        }
        // 设置时间
        let acquaintanceTimeDom = document.querySelectorAll(".acquaintance .time")[0];
        acquaintanceTimeDom.innerText = getDuration(2006, 9, 1);
        let loveTimeDom = document.querySelectorAll('.love .time')[0];
        loveTimeDom.innerText = getDuration(2016, 10, 21);
        // 倒计时
        let num = 3;
        let numDom = document.querySelectorAll('.init')[0];
        
        setInterval(()=>{
            num --;
            numDom.innerText = num;
            if(!num){
                numDom.remove();
                return;
            }

        },1000)
    }
    // 获取时长
    function getDuration(fullYear, mouth, date){
        let beforeTime = new Date().setFullYear(fullYear, mouth - 1, date);
        let currentTime = new Date().getTime();
        let dayTime = 24 * 60 * 60 * 1000;
        let differTime = (currentTime - beforeTime) / dayTime;
        return parseInt(differTime);
    }
    //生成随机数
    function random(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}())