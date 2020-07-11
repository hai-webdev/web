(function () {
    function init() {
        bindEvent();
    }

    function bindEvent() {

        $('.input-box').keyup(function(e) {
            if(e.keyCode == 13){
                $('button').trigger('click')
            }
        })



        $('button').on('click', function () {
            var oValue = $('.input-box').val();
            if (oValue) {
                createRight(oValue);
                getData(oValue);
                $('.input-box').val('');
            }
        })

    }

    function createRight(val) {
        var str = ' <li class="content-right">\
                        <div class="portrait">\
                            <img src="./img/right.png" alt="">\
                        </div>\
                        <div class="text-right">\
                            <span>\
                                '+ val + '\
                            </span>\
                        </div>\
                    </li>'
        $('.content-box').append(str);
    }

    function createLeft(val) {
        var str = ' <li class="content-left">\
                        <div class="portrait">\
                            <img src="./img/left.jpg" alt="">\
                        </div>\
                        <div class="text-left">\
                            <span>\
                            ' + val + '\
                            </span>\
                        </div>\
                    </li>'
        $('.content-box').append(str)
    }

    function getData(val) {
        $.ajax({
            url: 'https://developer.duyiedu.com/edu/turing/chat',
            method: 'get',
            dataType: 'json',
            data: {
                appkey: 'duyi_yuhaibo_1547731406410',
                text: val
            },
            success: function (res) {
                if(res.text){
                    createLeft(res.text);
                    $('.content').scrollTop($('.content')[0].scrollHeight - $('.content').innerHeight());
                }
            }
        })
    }

    init();
}())