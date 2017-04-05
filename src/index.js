'use strict';
import there from './assertions/there';
import visible from './assertions/visible';
import count from './assertions/count';
import text from './assertions/text';
import value from './assertions/value';
import focus from './assertions/focus';
import immediately from './chains/immediately';

export default function (client, options = {}) {
    var config = Object.assign({}, options, {client: client});
    return function chaiWebdriverIO(chai, utils) {
        let methodsToAdd = [there, visible, count, text, immediately, value, focus];

        methodsToAdd.forEach(function (methodToAdd) {
            methodToAdd(config, chai, utils);
        });
    };
}
