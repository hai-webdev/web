(function(){
        var num = parseInt(prompt('请输入图标的创建个数'));
    //创建桌面文件(传参：被传入的元素，插入元素的数量)
    function createDom(dom, num){
        var str = ''
        for(var i = 0; i < num; i ++){
            str += '<div draggable="true" style="background-color: rgba(' + (170 + i * 2) + ',' + (100 + i * 4) + ' ,' + (10 + i * 10) + ', 1)">' + (i + 1) + '</div>'
        }
        $(dom).html(str);
    }

    //新学习的拖放内容（传参：拖放元素，被拖放元素）
    function draggable(origin, target){
        var id = null;
        //扔到回收站
        $(origin).on('dragstart', function(e){
            id = $(e.target);
        })

        $(target).on('dragover', function(){
            return false;
        }).on('drop', function(e){
            $(id).clone().appendTo($(this).find('article'));
            $(id).remove();
        })

        //从回收站拖出来
        $(target).on('dragstart', function(e){
            id = $(e.target);
        })
        
        $(origin).on('dragover', function(){
            return false;
        }).on('drop', function(e){
            $(id).clone().appendTo($(this).find('article'));
            $(id).remove();
        })

    }

    createDom('.icon article', num);
    draggable('.icon', '.recycle');
}())