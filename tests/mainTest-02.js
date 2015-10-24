var assert = require('assert');
var series2 = require('../libs/main.js');

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

        series2.doneRegist(msg);
        console.log(series2.doneCheck());
        if (series2.doneCheck() === true) {
            console.log("end Queue");
            test('end Queue', function() {
                assert.equal(series2.doneCheck(), true);
            });
        }
    }, wait, wait, msg);
}

suite('node-series2', function() {

    series2.exec(list, fnc, function() {
        console.log("start Queue");
    });
    test('初期値確認', function() {
        assert.equal(series2.doneCheck(), false);
    });
    test('doneStatus()size確認', function() {
        var size = 0;
        var map = series2.doneStatus();
        for (var prop in map) {
            size++;
        }
        assert.equal(size, 6);

    });
    test('doneStatus()初期値確認', function() {
        var map = series2.doneStatus();
        for (var key in map) {
            assert.equal(map[key], false);
        }

    });;
});
