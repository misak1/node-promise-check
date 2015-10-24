'use strict';
var delay = 5000;
var examples = Array('./example-01.js', './example-02.js','./example-03.js');
for (var i = 0; i < examples.length; i++) {
    setTimeout(function(i) {
        console.log("\n" + "---------");
        console.log(examples[i]);
        console.log("---------");
        require(examples[i]);
    }, delay * (i), i);
}
