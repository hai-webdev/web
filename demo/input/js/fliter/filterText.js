//根据文本过滤
function filterArrByText(data, text) {
    if (!text) {
        return data
    } else {
        return data.filter(function (ele, index, self) {
            return ele.name.indexOf(text) != -1;
        })
    }
}