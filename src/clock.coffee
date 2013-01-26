'use strict'

clock = {}
event = require 'newtonjs-event'
timeout = null;

# Tick
#
# @param [Number] interval
clock.tick = (interval) ->
  do fn = ->
    event.emit 'tick'
    timeout = setTimeout fn, interval

# Tock
#
# @param [Function] fn
clock.tock = (fn) ->
  event.on 'tick', fn

# Stop ticking
clock.stop = ->
  clearTimeout timeout

module.exports = clock
