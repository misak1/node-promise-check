'use strict';
var Promise = require('promise');

// var myFish = ["a", "b", "c", "d"];
var ary0 = ["a0", "a1", "a2", "a3"];
var ary1 = ["b0", "b1", "b2", "b3"];
var ary2 = ["c0", "c1", "c2", "c3"];
var ary3 = ["d0", "d1", "d2", "d3"];
// var myFish = [ary0, ary1, ary2, ary3];

function deco(msg){
  return "@@ " + msg + " @@";
}

function toArray(obj) {
  return Array.prototype.slice.call(obj);
}

// var myFish = {"0":"A","1":"B","2":"C","3":"D",length: 4};
// if(!(myFish instanceof Array)){
//   myFish = Array.prototype.slice.call(myFish);
// }
// console.log(myFish);

var myFish = [  {
    "name": "smartphone-portrait",
    "viewport": {"width": 320, "height": 480},
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
  },
  {
    "name": "smartphone-landscape",
    "viewport": {"width": 480, "height": 320},
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
  },
  {
    "name": "tablet-portrait",
    "viewport": {"width": 768, "height": 1024},
    "userAgent": "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
  },
  {
    "name": "tablet-landscape",
    "viewport": {"width": 1024, "height": 768},
    "userAgent": "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4"
  },
  {
    "name": "desktop-standard",
    "viewport": {"width": 1280, "height": 1024},
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.74.9 (KHTML, like Gecko) Version/7.0.2 Safari/537.74.9"
  }
];
if(!(myFish instanceof Array)){
  myFish = Array.prototype.slice.call(myFish);
}
console.log(myFish);


// var obj = {
//   '0': 'zero',
//   '1': 'one',
//   '2': 'two',
//   '3': 'three',
//   '4': 'four',
//   length: 5
// };
//
// var ret = Array.prototype.slice.call(obj); // ["zero", "one", "two", "three", "four"]
// console.log(obj, ret);

function main() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        var shifted = myFish.shift();
            console.log(deco(shifted.name));
            resolve();
        }, 2000);
    });
}



console.log("                                 ");
//testA().then(testB).then(testC);testD();
var lp = ['main','main','main','main'];
var exe=lp[0]+'()';
// 2つ目移行
for(var i=1; i<lp.length; i++){
  var fnName = lp[i];
  exe+='.then('+ fnName+')';
}
exe+=";";
console.log("                                 ");
console.log(exe);
// testA().then(testA).then(testA);
eval(exe);
