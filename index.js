// node-series
module.exports = new(function() {

    'use strict';
    var Promise = require('promise');

    var status = [];
    var isArray = false; // Array(Object)
    var keyName = "";
    this.setKey = function(label) {
        keyName = label;
    }
    this.doneRegist = function(key) {
        status[key] = true;
    }
    this.doneStatus = function() {
        return status;
    }
    this.doneCheck = function() {
        var doneCheck = true;
        for (var key in status) {
            if (status[key] === false) {
                doneCheck = false;
                break;
            }
        }
        return doneCheck;
    }
    this.exec = function(ary, fnc, cb) {
        status = [];
        if (ary[0] instanceof Array || (typeof ary[0] === 'string')) {
            isArray = true;
        } else {
            keyName = 'name'
        }
        return new(function(ary, fnc, cb) {

            // Promise
            var main = function() {
                return new Promise(function(resolve, reject) {
                    var next = ary.shift();
                    if (!isArray) {
                        fnc(eval('next.' + keyName));
                    } else {
                        fnc(next.toString());
                    }
                    resolve();
                });
            };

            // Promiseの.then()...を作成
            var chainMethod = function() {
                var task = 'main()';
                // 2つ目以降".then()"で連結
                for (var i = 1; i < ary.length; i++) {
                    task += '.then(main)';
                }
                task += ".done(function(){cb();});";
                return task;
            };

            // ステータス登録
            var initStatus = function() {
                for (var i = 0; i < ary.length; i++) {
                    if (!isArray) {
                        status[eval('ary[i].' + keyName)] = false;
                    } else {
                        status[ary[i].toString()] = false;
                    }
                }
                console.log(status);
            };

            // do
            initStatus();
            eval(chainMethod());

        })(ary, fnc, cb);
    }
})();
