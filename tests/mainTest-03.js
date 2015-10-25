var assert = require('assert');
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
        console.log(series.doneCheck());
        if (series.doneCheck() === true) {
            console.log("end Queue");
            test('end Queue', function() {
                assert.equal(series.doneCheck(), true);
            });
        }
    }, wait, wait, msg);
}

suite('node-series', function() {

    series.exec(list, fnc, function() {
        console.log("start Queue");
    });
    test('初期値確認', function() {
        assert.equal(series.doneCheck(), false);
    });
    test('doneStatus()size確認', function() {
        var size = 0;
        var map = series.doneStatus();
        for (var prop in map) {
            size++;
        }
        assert.equal(size, 6);

    });
    test('doneStatus()初期値確認', function() {
        var map = series.doneStatus();
        for (var key in map) {
            assert.equal(map[key], false);
        }

    });;
});
