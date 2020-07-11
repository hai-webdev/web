import * as mapModule from "./map.js";
import {
    randomPage
} from "./ui.js";
randomPage();

const map = mapModule.map;
const PLAYER = mapModule.PLAYER;
/**
 * 获取玩家的当前位置
 * @param {*} arr 
 */
function getplayerInfo(arr) {
    const playerInfo = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === PLAYER) {
                playerInfo.row = i;
                playerInfo.col = j;
                return playerInfo;
            }
        }
    }
    return false;
}

/**
 * 获得下一个的位置
 * @param {*} direction 
 */
function getNextInfo(row, col, direction) {
    let content = mapModule.map;
    if (direction === "left") {
        return {
            row,
            col: col - 1,
            val: content[row][col - 1]
        }
    } else if (direction === "right") {
        return {
            row,
            col: col + 1,
            val: content[row][col + 1]
        }
    } else if (direction === "up") {
        return {
            row: row - 1,
            col,
            val: content[row - 1][col]
        }
    } else if (direction === "down") {
        return {
            row: row + 1,
            col,
            val: content[row + 1][col]
        }
    }

}

/**
 * 判断是否可移动
 * @param {*} nextRow 
 * @param {*} nextCol 
 */

function isMove(nextRow, nextCol, direction) {
    let playerInfo = getplayerInfo(map);
    let nextInfo = getNextInfo(playerInfo.row, playerInfo.col, direction);
    let nextNumber = map[nextRow][nextCol];
    if (nextNumber === mapModule.SPACE) {
        placeChange(playerInfo, nextInfo);
        randomPage();
        return true;
    } else if (nextNumber === mapModule.WALL) {
        return false;
    } else if (nextNumber === mapModule.BOX) {
        let nextInfo = getNextInfo(nextRow, nextCol, direction);
        let thisInfo = {
            row: nextRow,
            col: nextCol
        };
        if (map[nextInfo.row][nextInfo.col] === mapModule.SPACE) {
            placeChange(playerInfo, nextInfo);
            placeChange(nextInfo, thisInfo);
            randomPage();
            return true;
        } else {
            return false;
        }


    }
}

/**
 * 位置交换
 * @param {*} point1 
 * @param {*} point2 
 */
function placeChange(point1, point2) {
    let template = map[point1.row][point1.col]
    map[point1.row][point1.col] = map[point2.row][point2.col];
    map[point2.row][point2.col] = template;
}

export function isGameOver(correct){
    for (const item of correct) {
        if(map[item.row][item.col] !== mapModule.BOX){
            return false;
        }
    }
    return true;
}




export function playerMove(direction) {
    let playerInfo = getplayerInfo(map);
    let nextInfo = getNextInfo(playerInfo.row, playerInfo.col, direction);
    isMove(nextInfo.row, nextInfo.col, direction);
}