import * as mapModule from "./map.js";

const divContainer = document.getElementById("game");
const itemWidth = 36;
const itemHeight = 36;

/**
 * 根据数组，渲染出游戏地图
 * @param {Array} arr 
 */
function createdom(arr){
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr[i].length; j ++){
            let div = document.createElement("div");
            div.className = "item";
            if(arr[i][j] === mapModule.PLAYER){
                div.classList.add("player");
            }
            else if(arr[i][j] === mapModule.WALL){
                div.classList.add("wall");
            }
            else if(arr[i][j] === mapModule.BOX){
                div.classList.add("box");
                if(isCorrect(i, j)){
                    div.classList.add("correct-box");
                }
            }
            else if (arr[i][j] === mapModule.SPACE){
                if(isCorrect(i, j)){
                    div.classList.add("correct");
                }

            }
            div.style.left = itemWidth * j + "px";
            div.style.top = itemHeight * i + "px";
            divContainer.appendChild(div);
        }
    }
}

/**
 * 判断是不是正确位置
 * @param {Number} row 
 * @param {Number} col 
 */
function isCorrect(row, col){
    const correct = mapModule.correct;
    for (const item of correct) {
        if(item.row === row && item.col === col){
            return true;
        }
    }
    return false;
}

export function randomPage(){
    divContainer.innerHTML = "";
    divContainer.style.width = itemWidth * mapModule.map[0].length + "px";
    divContainer.style.height = itemHeight * mapModule.map.length + "px";
    createdom(mapModule.map);
}

