var personArr = [
    { name: '王港', src: './img/3.png', des: '颈椎不好', sex: 'm', age: 18 },
    { name: '刘莹', src: './img/5.png', des: '我是谁', sex: 'f', age: 23 },
    { name: '王秀莹', src: './img/4.png', des: '我很好看', sex: 'f', age: 25 },
    { name: '刘金雷', src: './img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15 },
    { name: '刘飞翔', src: './img/2.png', des: '瓜皮刘', sex: 'm', age: 20 },
    { name: '王港1', src: './img/3.png', des: '颈椎不好', sex: 'm', age: 18 },
    { name: '刘莹2', src: './img/5.png', des: '我是谁', sex: 'f', age: 23 },
    { name: '王秀莹3', src: './img/4.png', des: '我很好看', sex: 'f', age: 25 },
    { name: '刘金雷4', src: './img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15 },
    { name: '刘飞翔5', src: './img/2.png', des: '瓜皮刘', sex: 'm', age: 20 }
];

var start = {
    text: '',
    sex: 'a'
}

//渲染页面
function renderHTML(data) {
    var ul = document.getElementsByTagName('ul')[0],
        str = '';
    data.forEach(function (ele, index, self) {
        str += '<li>\
        <img src="'+ ele.src + '" alt="">\
        <h4>'+ ele.name + '</h4>\
        <p>'+ ele.des + '、、、、我' + ele.age + '岁' + '</p>\
    </li>';
    })
    ul.innerHTML = str;
}
renderHTML(personArr)

//文本输入、开始过滤
var oInput = document.getElementsByTagName('input')[0],
    times = null;
//防抖操作
oInput.oninput = function () {
    var thisInp = this;
    clearTimeout(times);
    times = setTimeout(function () {
        myFilterText.call(thisInp)
    }, 300)
}
//文本过滤及渲染
function myFilterText() {
    start.text = this.value;
    renderHTML(lastFilterArr(personArr))
}

//点击按钮对应操作
var btn = document.getElementsByClassName('btn'),
    boxTop = document.getElementsByClassName('btnBox')[0];
boxTop.onclick = function (e) {
    initBtn();
    if (e.target.tagName != 'SPAN') {
        return false;
    } else {
        e.target.classList.add('active');
        start.sex = e.target.getAttribute('sex');
        renderHTML(lastFilterArr(personArr))
    }
}
//初始化所有按钮背景
function initBtn() {
    var len = btn.length;
    for (var i = 0; i < len; i++) {
        btn[i].classList.remove('active');
    }
}



