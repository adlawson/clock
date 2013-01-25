(function () {

    "use strict";

    var event = require('newtonjs-event');
    var timeout;

    /**
     * Stop the clock
     */
    var stop = function () {
        clearTimeout(timeout);
    }

    /**
     * Tick
     *
     * @param {Number} interval
     */
    var tick = function (interval) {
        (function callback () {
            event.emit('tick');
            clearTimeout(timeout);
            timeout = setTimeout(callback, interval);
        }());
    };

    /**
     * Tock
     *
     * @param {Function} fn
     */
    var tock = function (fn) {
        event.on('tick', fn);
    };

    module.exports = {
        "stop": stop,
        "tick": tick,
        "tock": tock
    };

}());
