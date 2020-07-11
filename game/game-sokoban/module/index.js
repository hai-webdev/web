import * as mapModule from "./map.js";
import {playerMove, isGameOver} from "./game.js";




/**
 * 键盘事件
 */
window.onkeydown = function(e){
    let key = e.key;
    if(key === "ArrowUp"){
        playerMove("up")
    }
    else if(key === "ArrowDown"){
        playerMove("down")
    }
    else if(key === "ArrowLeft"){
        playerMove("left")
    }
    else if(key ==="ArrowRight"){
        playerMove("right")
    }
    if(isGameOver(mapModule.correct)){
        this.setTimeout(function(){
            this.alert("游戏结束！");
            location.reload();
        }, 100);
    }
}

/**
 * 点击事件
 */

window.onclick = function(){
    let val = this.event.target.getAttribute("data-keydown");
    if(!val){
        return false;
    }
    if(val === "up"){
        playerMove("up")
    }
    else if(val === "down"){
        playerMove("down")
    }
    else if(val === "left"){
        playerMove("left")
    }
    else if(val ==="right"){
        playerMove("right")
    }
    if(isGameOver(mapModule.correct)){
        this.setTimeout(function(){
            this.alert("游戏结束！");
            location.reload();
        }, 100);
    }

    this.event.stopPropagation;
}