var yhbObj = (function () {
    let index = 0;
    let times = null;
    
    const slideshowObj = {
        init: function (data) {
            const domWrap = document.getElementById(data.dom);
            const paginationWrap = document.getElementById(data.pagination);
            const picListLen = data.picList.length;
            // let index = 0;
            let times = null;
            // 创建图片列表
            this.createSwiper({
                dom: domWrap,
                len: picListLen,
                picList: data.picList,
                height: data.height
            });
            this.createPagination({
                pagination: paginationWrap,
                len: picListLen,
                picList: data.picList,
            });
            this.autoMove({
                len: picListLen,
                dom: domWrap,
                pagination: paginationWrap,
                time: data.time,
            });
            this.floatListHover({
                len: picListLen,
                pagination: paginationWrap,
                dom: domWrap,
                time: data.time,
            });
        },
        createSwiper: (data) => {
            let tmp = "";
            data.dom.style.height = data.height;
            for (let i = 0; i < data.len; i++) {
                var active = ""
                if (i == 0) {
                    active = "active";
                }
                tmp += `<li class="swiper-slide ${active}" style="background-image: url(${data.picList[i].pic})"></li>`;
            }
            data.dom.innerHTML = tmp;
        },
        createPagination: (data) => {
            let tmp = "";
            for (let i = 0; i < data.len; i++) {
                var active = ""
                if (i == 0) {
                    active = "active";
                }
                tmp += `<li class="swiper-items ${active}">
                            <div class="title-wrap clearF">
                                <div class="num">${i + 1}</div>
                                <div class="title">${data.picList[i].title}</div>
                            </div>
                            <p>${data.picList[i].note}</p>
                        </li>`;
            }
            data.pagination.innerHTML = tmp;
        },
        floatListHover: function(data){
            const paginationList = data.pagination.children;
            const domList = data.dom.children;
            const self = this;
            for (let i = 0; i < data.len; i++) {
                paginationList[i].onmouseenter = function () {
                    clearInterval(times);
                    for (var j = 0; j < data.len; j++) {
                        paginationList[j].className = "swiper-items";
                        domList[j].className = "swiper-slide";
                    }
                    this.className = "swiper-items active";
                    index = i;
                    domList[i].className = "swiper-slide active";
                }
                paginationList[i].onmouseleave = () => {
                    self.autoMove({
                        len: data.len,
                        dom: data.dom,
                        pagination: data.pagination,
                        time: data.time,
                    });
                }
            }

        },
        autoMove: (data) => {
            const paginationList = data.pagination.children;
            const domList = data.dom.children;
            times = setInterval(function () {
                index++;
                index %= 7;
                for (let i = 0; i < data.len; i++) {
                    domList[i].className = "swiper-slide"
                    paginationList[i].className = "swiper-items";
                }
                domList[index].className = "swiper-slide active"
                paginationList[index].className = "swiper-items active";

            }, data.time)
        }
    }
    return slideshowObj;
}())

