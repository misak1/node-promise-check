'use strict';
var delay = 5000;
var examples = Array('./mainTest-01.js', './mainTest-02.js', './mainTest-03.js');
for (var i = 0; i < examples.length; i++) {
    require(examples[i]);
}
