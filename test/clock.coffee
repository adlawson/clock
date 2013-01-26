'use strict'

{assert} = require 'chai'
{spy}    = require 'sinon'

clock = require '../src/clock'

suite 'clock:', ->

  suite 'tick:', ->
    foo = bar = baz = null

    setup ->
      foo = spy()
      bar = spy()
      clock.tock foo
      clock.tock bar

    test 'Tick calls tock', ->
      clock.tick 1
      assert.isTrue(foo.calledOnce);
      assert.isTrue(bar.calledOnce);
