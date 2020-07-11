//根据性别过滤
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data
    } else {
        return data.filter(function (ele, index, self) {
            return ele.sex == sex;
        })
    }
}