var tape = require("tape")
var range = require("..")

tape("range", function(test){
  test.deepEqual(range(0, 0), [0])
  test.deepEqual(range(0, 4), [0, 1, 2, 3, 4])
  test.deepEqual(range(-3, 4), [-3, -2, -1, 0, 1, 2, 3, 4], "works with negative values")
  test.deepEqual(range(0, -4), [0, -1, -2, -3, -4], "works with desc negative values")
  test.deepEqual(range(-2, -4), [-2, -3, -4], "works with both desc negative values")
  test.deepEqual(range(0, 2, .5), [0, .5, 1, 1.5, 2], "works with step argument")
  test.deepEqual(range(0, 2, -.5), [0, .5, 1, 1.5, 2], "absolutizes step argument")
  test.deepEqual(range(-2, -4, .5), [-2, -2.5, -3, -3.5, -4], "works with both desc negative values with a step argument")
  test.throws(function(){
    range(-2, -4, "foo")
  }, "throws when a wrong `step` argument is provided")
  test.end()
})
