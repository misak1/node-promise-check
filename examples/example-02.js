var series = require('../libs/main.js');

// 2次元配列
var ary0 = ["a0", "a1", "a2", "a3"];
var ary1 = ["b0", "b1", "b2", "b3"];
var ary2 = ["c0", "c1", "c2", "c3"];
var ary3 = ["d0", "d1", "d2", "d3"];
var list = [ary0, ary1, ary2, ary3];

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
