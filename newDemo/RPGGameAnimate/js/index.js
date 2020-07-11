(function () {
    var btnWrap = document.getElementsByClassName("btnWrap")[0];
    var rpg = document.getElementsByClassName("rpg")[0];
    var speed = 10;
    var animate = null;
    var num = 0;
    var key = null;
    var stopKey = "down";
    // 人物移动、人物移动方向

    // 鼠标点击操作
    btnWrap.onclick = function (e) {
        rpgMove(e.target.id)
    }
    document.onkeydown = function (e) {
        if (e.which == 38 || e.which == 40 || e.which == 37 || e.which == 39 || e.which == 81 || e.which == 87 || e.which == 65 || e.which == 83 || e.which == 90) {
            rpgMove(e.which.toString())
        }
    }

    // rpg人物运动函数
    function rpgMove(arg) {
        clearInterval(animate);
        key = arg;
        switch (key) {
            case "38":
                key = "up";
                break;
            case "40":
                key = "down";
                break;
            case "37":
                key = "left";
                break;
            case "39":
                key = "right";
                break;
            case "81":
                key = "lu";
                break;
            case "87":
                key = "rightUp";
                break;
            case "65":
                key = "ld";
                break;
            case "83":
                key = "rd";
                break;
            case "90":
                key = "stop";
                break;
        }

        // 如果点击了停止按钮，则停止运动。
        if (key == "stop") {
            rpg.src = `images/${stopKey}-0.png`;
            return false;
        }
        // 判断是否点击了按钮，如果点击了按钮，在进行人物移动
        if (key.length > 0) {
            stopKey = key;
            animate = setInterval(function () {
                // 设置人物的移动
                rpg.src = `images/${key}-${++num}.png`;
                num %= 4;
                // 设置人物的移动速度
                switch (key) {
                    case "up":
                        rpg.style.top = rpg.offsetTop - speed + "px";
                        break;
                    case "down":
                        rpg.style.top = rpg.offsetTop + speed + "px";
                        break;
                    case "left":
                        rpg.style.left = rpg.offsetLeft - speed + "px";
                        break;
                    case "right":
                        rpg.style.left = rpg.offsetLeft + speed + "px";
                        break;
                    case "lu":
                        rpg.style.left = rpg.offsetLeft - speed + "px";
                        rpg.style.top = rpg.offsetTop - speed + "px";
                        break;
                    case "ld":
                        rpg.style.left = rpg.offsetLeft - speed + "px";
                        rpg.style.top = rpg.offsetTop + speed + "px";
                        break;
                    case "rightUp":
                        rpg.style.left = rpg.offsetLeft + speed + "px";
                        rpg.style.top = rpg.offsetTop - speed + "px";
                        break;
                    case "rd":
                        rpg.style.left = rpg.offsetLeft + speed + "px";
                        rpg.style.top = rpg.offsetTop + speed + "px";
                        break;
                }
            }, 150)
        }
    }
})()