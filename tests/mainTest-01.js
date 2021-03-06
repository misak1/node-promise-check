var assert = require('assert');
var series = require('../index.js');

var list = [{
    "name": "smartphone-portrait",
    "viewport": {
        "width": 320,
        "height": 480
    },
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
}, {
    "name": "smartphone-landscape",
    "viewport": {
        "width": 480,
        "height": 320
    },
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
}, {
    "name": "tablet-portrait",
    "viewport": {
        "width": 768,
        "height": 1024
    },
    "userAgent": "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
}, {
    "name": "tablet-landscape",
    "viewport": {
        "width": 1024,
        "height": 768
    },
    "userAgent": "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
}, {
    "name": "desktop-standard",
    "viewport": {
        "width": 1280,
        "height": 1024
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.74.9 (KHTML, like Gecko) Version/7.0.2 Safari/537.74.9"
}];

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

// console.log(list);
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
