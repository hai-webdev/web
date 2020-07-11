var oInput = document.getElementsByTagName('input')[0],
            oUl = document.getElementsByClassName('jsonp')[0],
            btn = document.getElementsByTagName('button')[0],
            times = null;

        oInput.oninput = function () {
            var self = this;
            clearTimeout(times);
            times = setTimeout(function () {
                var value = self.value;
                var oScript = document.createElement('script');
                oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=myBaidu';
                document.body.appendChild(oScript);
                document.body.removeChild(oScript);

            }, 500)
        }

        function myBaidu(data) {
            var data = data.s;
            if (data != 0) {
                var str = '';
                data.forEach(function (ele, index) {
                    str += '<li><a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=93380420_hao_pg&wd=' + ele + '">' + ele + '</a></li>'
                })
                oUl.innerHTML = str;
                oUl.style.display = 'block';
            } else {
                oUl.style.display = 'none';
            }
        }

        function enter() {
            var aValue = oInput.value;
            var aScript = document.createElement('script');
                document.body.appendChild(aScript);
                document.body.removeChild(aScript);
            if(aValue != 0) {
                window.location.href= 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=93380420_hao_pg&wd=' + aValue;
            }
        }

        btn.onclick = function () {
            enter()
        }

        document.onkeydown = function (e) {
            if(e.keyCode == 13) {
                enter()
            }
        }