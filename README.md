
# node-promise-check
非同期スクリプトの完了を受け取る

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
./example-01.js
---------
[ 'smartphone-portrait': false,
  'smartphone-landscape': false,
  'tablet-portrait': false,
  'tablet-landscape': false,
  'desktop-standard': false ]
start Queue
200ms %%%%% desktop-standard %%%%%
false
600ms %%%%% tablet-portrait %%%%%
false
1000ms %%%%% smartphone-landscape %%%%%
false
1200ms %%%%% smartphone-portrait %%%%%
false
1400ms %%%%% tablet-landscape %%%%%
true
end Queue
\


```


## ライセンス - License

MIT License


## 作者 - Author

- (C)Misaki Shibata <misaki.pink@gmail.com>
