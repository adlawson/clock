(function () {

    "use strict";

    var assert = require('chai').assert
    var spy = require('sinon').spy

    var modulePath = '../src/clock';

    suite('clock:', function () {

        suite('tick:', function () {
            var foo, bar;
            var clock = require(modulePath);

            setup(function () {
                foo = spy();
                bar = spy();
                clock.tock(foo);
                clock.tock(bar);
            });

            test('Tick calls tock', function () {
                clock.tick(1);
                clock.stop();
                assert.isTrue(foo.calledOnce);
                assert.isTrue(bar.calledOnce);
            });

        });

    });

}());
