(function () {
    // 获取内容区以及内容区宽高
    var heroTime = null;
    var content = document.getElementsByClassName("content")[0];
    var timeText = document.getElementsByClassName("time")[0];
    var monsterDom = document.getElementsByClassName("monster");
    var button = document.getElementsByClassName("start")[0];
    var keyBtn = document.getElementsByClassName("key")[0];
    var contentWidth = content.offsetWidth;
    var contentHeight = content.offsetHeight;
    var dateline = 0;
    var timeMs = 0;
    var timeS = 0;
    var timeF = 0;
    var monsterArr = [];
    var playGame = false;
    // 页面初始化
    function init() {
        playGame = true;
        // 创建小英雄
        hero.createDom();
        // 创建小怪物
        setInterval(function(){
            var m = createMonter();
            monsterArr.push(m);
        }, 2000)
        heroTime = setInterval(function () {
            // 小英雄移动
            hero.moveDom(16 / 1000);
            // 小怪物移动
            for( var i = 0; i < monsterDom.length; i ++){
                var mm = monsterArr[i];
                mm.moveDom(16 / 100, monsterDom[i]);
            }
            // 键盘事件
            hero.domEvent();
            // 碰撞检测
            if (collision(document.getElementsByClassName("hero")[0], monsterArr)) {
                clearInterval(heroTime);
                alert("被灰太狼抓住了,\n戏耍了" + timeText.innerHTML + "秒");
              	location.reload();
                return false;
            }
            // 设置时间
            setTime();
        }, 16)
    }
    // 设置小英雄
    var hero = {
        width: 32,
        height: 32,
        left: 0,
        top: 0,
        xSpeed: 0,
        ySpeed: 0,
        // 创建小英雄
        createDom: function () {
            var heroDom = document.createElement("div");
            heroDom.classList = "hero";
            heroDom.style.width = this.width + "px";
            heroDom.style.height = this.height + "px";
            heroDom.style.left = (contentWidth - this.width) / 2 + "px";
            heroDom.style.top = (contentHeight - this.height) / 2 + "px";
            content.appendChild(heroDom);

        },
        // 小英雄移动
        moveDom: function (times) {
            var heroDom = document.getElementsByClassName("hero")[0];
            heroDom.style.left = heroDom.offsetLeft + this.xSpeed * times + "px";
            heroDom.style.top = heroDom.offsetTop + this.ySpeed * times + "px";
            if (heroDom.offsetLeft < 0) {
                heroDom.style.left = 0;
            }
            if (heroDom.offsetTop < 0) {
                heroDom.style.top = 0;
            }
            if (heroDom.offsetLeft > contentWidth - this.width) {
                heroDom.style.left = contentWidth - this.width + "px";
            }
            if (heroDom.offsetTop > contentHeight - this.height) {
                heroDom.style.top = contentHeight - this.height + "px";
            }
        },
        // 键盘控制英雄移动
        domEvent: function () {
            var that = this;
            window.ontouchstart = function (e) {
                switch (e.target.id) {
                    case "up":
                        that.ySpeed = -100;
                        break;
                    case "down":
                        that.ySpeed = 100;
                        break;
                    case "left":
                        that.xSpeed = -100;
                        break;
                    case "right":
                        that.xSpeed = 100;
                        break;
                }
            }
            window.ontouchend = function (e) {
                switch (e.target.id) {
                    case "up":
                        that.ySpeed = 0;
                        break;
                    case "down":
                        that.ySpeed = 0;
                        break;
                    case "left":
                        that.xSpeed = 0;
                        break;
                    case "right":
                        that.xSpeed = 0;
                        break;
                }
            }
            keyBtn.onmousedown = function (e) {
                switch (e.target.id) {
                    case "up":
                        that.ySpeed = -100;
                        break;
                    case "down":
                        that.ySpeed = 100;
                        break;
                    case "left":
                        that.xSpeed = -100;
                        break;
                    case "right":
                        that.xSpeed = 100;
                        break;
                }
            }
            keyBtn.onmouseup = function (e) {
                switch (e.target.id) {
                    case "up":
                        that.ySpeed = 0;
                        break;
                    case "down":
                        that.ySpeed = 0;
                        break;
                    case "left":
                        that.xSpeed = 0;
                        break;
                    case "right":
                        that.xSpeed = 0;
                        break;
                }
            }

            window.onkeydown = function (e) {
                switch (e.which) {
                    case 38:
                        that.ySpeed = -100;
                        break;
                    case 40:
                        that.ySpeed = 100;
                        break;
                    case 37:
                        that.xSpeed = -100;
                        break;
                    case 39:
                        that.xSpeed = 100;
                        break;
                }
            }
            window.onkeyup = function (e) {
                switch (e.which) {
                    case 38:
                        that.ySpeed = 0;
                        break;
                    case 40:
                        that.ySpeed = 0;
                        break;
                    case 37:
                        that.xSpeed = 0;
                        break;
                    case 39:
                        that.xSpeed = 0;
                        break;
                }
            }
        }
    }
    // 设置小怪物
    function createMonter(){
        var monster = {
            width: 32,
            height: 32,
            left: 0,
            top: 0,
            monsterDom: document.createElement("div"),
            xSpeed: setRandom(5, 15),
            ySpeed: setRandom(5, 15),
            // 创建小怪物
            createDom: function () {
                this.monsterDom.classList = "monster";
                this.monsterDom.style.width = this.width + "px";
                this.monsterDom.style.height = this.height + "px";
                this.monsterDom.style.left = 0;
                this.monsterDom.style.top = 0;
                content.appendChild(this.monsterDom);
    
            },
            // 小怪物移动
            moveDom: function (times, monsterDom) {
                monsterDom.style.left = monsterDom.offsetLeft + this.xSpeed * times + "px";
                monsterDom.style.top = monsterDom.offsetTop + this.ySpeed * times + "px";
                if (monsterDom.offsetLeft < 0) {
                    this.xSpeed = - this.xSpeed;
                }
                if (monsterDom.offsetTop < 0) {
                    this.ySpeed = - this.ySpeed;
                }
                if (monsterDom.offsetLeft > contentWidth - this.width) {
                    this.xSpeed = - this.xSpeed;
                }
                if (monsterDom.offsetTop > contentHeight - this.height) {
                    this.ySpeed = - this.ySpeed;
                }
            },
    
        }
        monster.createDom();
        return monster;
    }
    // 碰撞检测
    function collision(hero, monsters) {
        for(var i = 0; i < monsters.length; i ++){
            var m = monsters[i].monsterDom;
            if(_collision(m)){
                return true;
            }
        }
        return false;
        function _collision(m){
            if(hero && m){
                //设置小英雄的基本属性
                var heroLeft = hero.offsetLeft;
                var heroTop = hero.offsetTop;
                var heroWidth = hero.offsetWidth;
                var heroHeight = hero.offsetHeight;
                // 设置小怪物的基本属性
                var monstersLeft = m.offsetLeft;
                var monstersTop = m.offsetTop;
                var monstersWidth = m.offsetWidth;
                var monstersHeight = m.offsetHeight;
                // 校正值
                var checkX = 5;
                var checkY = 5;
                // 碰撞判断
                if (Math.abs(heroLeft - monstersLeft) < ((heroWidth + monstersWidth) / 2 - checkX) &&
                    Math.abs(heroTop - monstersTop) < ((heroHeight + monstersHeight) / 2 - checkY)) {
                    return true;
                }
                return false;
                }
        }

    }
    // 设置显示时间
    function setTime(){
        dateline += 16;
        timeF = parseInt(dateline / 60000);
        timeS = parseInt((dateline - timeF) / 1000);
        timeMs = parseInt((dateline - timeS) / 10);
        timeText.innerHTML = timeF.toString().padStart(2, "0") + ":"
                             + (timeS % 60).toString().padStart(2, "0") + ":"
                             + (timeMs % 100 ).toString().padStart(2, "0");
    }
    // 生成随机数函数
    function setRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    // 初始化函数执行
    button.onclick = function(){
        if(!playGame){
            init();
            document.querySelector(".start").innerText = "戏耍中..."
        }

    }
})()