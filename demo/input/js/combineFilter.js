//高阶思想 合并功能

function combineFilter(filterFun){
    return function(data){
        for(var prop in filterFun){
            data = filterFun[prop](data, start[prop]);
        }
        return data;
    }
}

var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
})