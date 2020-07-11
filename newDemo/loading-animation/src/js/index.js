import "../less/index.less";
import $ from "jquery";

var timer = null;
var time = 0;
timer = setInterval(function(){
    time ++;
    $(".bar").css("width", time + "%");
    if(time == 100){
        $(".page-loading").addClass("active");
        clearInterval(timer);
        setTimeout(function(){
            $(".monsterText").html("We are<br>SQUARE<br>MONSTER!");
            $(".page-loading").hide();
        },3000)
    }
}, 30)