
# node-promise-check
[![Build Status](http://img.shields.io/travis/misak1/node-promise-check/master.svg?style=flat)](https://travis-ci.org/misak1/node-promise-check)
[![npm total download](https://img.shields.io/npm/dt/node-promise-check.svg?style=flat)](https://www.npmjs.com/package/node-promise-check)
[![npm version](https://badge.fury.io/js/node-promise-check.svg?style=flat)](https://badge.fury.io/js/node-promise-check)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://ruedap.mit-license.org/2015)

AsyncQueueの完了を受け取れるようにします。<br>
Queueの実行にはPromiseを使っています。
<div style="background-color:#ffffff; border:1px solid #cccccc;">
<img src="https://raw.githubusercontent.com/misak1/node-promise-check/master/diagram.png" "フローチャート" style="padding:10px">
</div>

## インストール - Install
```
$ npm i -S node-promise-check
```

## 使い方 - Usage

### NodeJS
```js
var series = require('node-promise-check');
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
            console.timeEnd("example-03");
        }
    }, wait, wait, msg);
}

series.exec(list, fnc, function() {
    console.time("example-03");
    console.log("start Queue");
});
```

## for developer

### test
```
# npm test
```

### examples
```
# npm run examples

> node-promise-check@0.0.1 examples /home/misaki/workspace/node-promise-check
> node ./examples/index.js


---------
./example-03.js
---------
[ a: false, b: false, c: false, d: false, e: false, f: false ]
start Queue
900ms %%%%% f %%%%%
false
1000ms %%%%% a %%%%%
false
1200ms %%%%% b %%%%%
false
1500ms %%%%% e %%%%%
false
1600ms %%%%% d %%%%%
false
1900ms %%%%% c %%%%%
true
end Queue
example-03: 1902ms

```


## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
