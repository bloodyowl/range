# range

[![browser support](https://ci.testling.com/bloodyowl/range.png)](https://ci.testling.com/bloodyowl/range)

[![Build Status](https://travis-ci.org/bloodyowl/range.svg)](https://travis-ci.org/bloodyowl/range)


array-range generator

## install

```sh
$ npm install bloody-range
```

## require

```javascript
var range = require("bloody-range")
```

## api

### range(start, end[, step=1])

creates a range from `start` to `end`.

## example

```javascript
range(0, 4)
// => [0, 1, 2, 3, 4]
range(-3, 4)
// => [-3, -2, -1, 0, 1, 2, 3, 4]
range(-2, -4, .5)
// => [-2, -2.5, -3, -3.5, -4]
```
