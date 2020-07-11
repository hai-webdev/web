var oInput = document.getElementsByClassName("input_1_a")[0],
    oUpload = document.getElementsByClassName("shangchuan")[0],
    oClose = document.getElementsByClassName("tuo_xx")[0];
oInput.onclick = function () {
    oUpload.style.display = "block";
}
oClose.onclick = function () {
    oUpload.style.display = "none";
}