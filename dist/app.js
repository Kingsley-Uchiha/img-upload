"use strict";
var image = document.querySelector("#image");
var imageElement = document.querySelector("img");
var file;
var preview;
// const formData = new FormData();
image === null || image === void 0 ? void 0 : image.addEventListener("change", function (e) {
    console.log(e);
    var target = e.target;
    file = target.files[0];
    console.log(file);
    // formData.append('file', file);
    var readFile = new FileReader();
    readFile.onload = function () {
        console.log('file', readFile.result);
        preview = readFile.result;
        if (imageElement) {
            imageElement.src = "".concat(preview);
            imageElement.alt = "".concat(file === null || file === void 0 ? void 0 : file.name);
        }
    };
    readFile.readAsDataURL(file);
});
