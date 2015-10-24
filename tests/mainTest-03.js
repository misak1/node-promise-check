var assert = require('assert');
var series3 = require('../libs/main.js');

// 1次元配列
var list = ["a", "b", "c", "d", "e", "f"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fnc(msg) {
    var wait = getRandomInt(1, 20) * 100;
    setTimeout(function(wait, msg) {
        console.log(wait + "ms", "%%%%% " + msg + " %%%%%");

        series3.doneRegist(msg);
        console.log(series3.doneCheck());
        if (series3.doneCheck() === true) {
            console.log("end Queue");
            test('end Queue', function() {
                assert.equal(series3.doneCheck(), true);
            });
        }
    }, wait, wait, msg);
}

suite('node-series3', function() {

    series3.exec(list, fnc, function() {
        console.log("start Queue");
    });
    test('初期値確認', function() {
        assert.equal(series3.doneCheck(), false);
    });
    test('doneStatus()size確認', function() {
        var size = 0;
        var map = series3.doneStatus();
        for (var prop in map) {
            size++;
        }
        assert.equal(size, 6);

    });
    test('doneStatus()初期値確認', function() {
        var map = series3.doneStatus();
        for (var key in map) {
            assert.equal(map[key], false);
        }

    });;
});
