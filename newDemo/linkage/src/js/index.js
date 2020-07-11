import "../less/index.less";
import $ from "jquery";
import provice from "./city.js";
function renderLinkage(data, province, city, area) {
    let provinceArr = [];
    let cityArr = [];
    let areaArr = [];
    let provinceLen = data.length;
    let provinceCont = `<option value="所有省份">所有省份</option>`;
    let cityCont;
    let areaCont;
    for (let i = 0; i < provinceLen; i++) {
        provinceArr.push(data[i].name);
        let cityData = data[i].city;
        let cityLen = cityData.length;
        if (cityData) {
            for (let j = 0; j < cityLen; j++) {
                cityArr.push([cityData[j].name, data[i].name]);
                let areaData = cityData[j].districtAndCounty;
                let areaLen = areaData.length;

                if (areaData) {
                    for (let k = 0; k < areaLen; k++) {
                        areaArr.push([areaData[k], cityData[j].name]);
                    }
                }
            }
        }
    }
    for (let i = 0; i < provinceArr.length; i++) {
        provinceCont += `<option value="${provinceArr[i]}">${provinceArr[i]}</option>`;
    }
    $(province).html(provinceCont);
    $(province).change(function () {
        $(city).html();
        $(area).html(`<option value="所有区县">所有区县</option>`);
        cityCont = "";
        areaCont = "";
        for (let i = 0; i < cityArr.length; i++) {
            if ($(this).val() == cityArr[i][1]) {
                cityCont += `<option value="${cityArr[i][0]}">${cityArr[i][0]}</option>`;
            }
        }
        $(city).html(cityCont);
        $(city).trigger("change")
    })
    $(city).change(function () {
        $(area).html();
        areaCont = "";
        for (let i = 0; i < areaArr.length; i++) {
            if ($(this).val() == areaArr[i][1]) {
                areaCont += `<option value="${areaArr[i][0]}">${areaArr[i][0]}</option>`;
            }
        }
        $(area).html(areaCont);
    })
}
renderLinkage(provice, "#province", "#city", "#area");