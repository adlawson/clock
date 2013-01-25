# newtonjs/clock #

Clock based event emitting.

**Version:** *0.1.0*<br/>
**Build status:** [![Build Status][travis-status]][travis]


### Usage ###

```js
var clock = require('newtonjs-clock');

clock.tock(function () {
    console.log('tock');
});

clock.tick(1000);

// tock
// tock
// tock
// ... (every 1000ms)
```


### Installation ###

This library isn't available from the NPM repository or any other
package manager, but you can still add it to your `package.json`

```json
{
  "dependencies": {
    "newtonjs-clock": "git://github.com/newtonjs/clock.git#master"
  }
}
```

### Licence ###
The content of this library is released under the **MIT License** by **Andrew Lawson**.<br/>
You can find a copy of this license at http://www.opensource.org/licenses/mit


<!-- Links -->
[travis]: https://travis-ci.org/newtonjs/clock
[travis-status]: https://travis-ci.org/newtonjs/clock.png?branch=master