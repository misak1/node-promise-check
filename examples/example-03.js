var series = require('../index.js');

// 1次元配列
var list = ["a", "b", "c", "d", "e", "f"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fnc(msg) {
    var wait = getRandomInt(1, 20) * 100;
    setTimeout(function(wait, msg) {

        console.log(wait + "ms", "%%%%% " + msg + " %%%%%");
        series.doneRegist(msg);

        // console.log(series.doneStatus());
        console.log(series.doneCheck());
        if (series.doneCheck() === true) {
            console.log("end Queue");
        }
    }, wait, wait, msg);
}

series.exec(list, fnc, function() {
    console.log("start Queue");
});
