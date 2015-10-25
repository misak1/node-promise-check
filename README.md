
# node-promise-check
[![Build Status](https://travis-ci.org/misak1/node-series.svg?branch=master)](https://travis-ci.org/misak1/node-series)

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
        }
    }, wait, wait, msg);
}

series.exec(list, fnc, function() {
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
600ms %%%%% b %%%%%
false
600ms %%%%% f %%%%%
false
800ms %%%%% c %%%%%
false
1400ms %%%%% d %%%%%
false
1500ms %%%%% e %%%%%
false
2000ms %%%%% a %%%%%
true
end Queue

```


## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
