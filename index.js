module.exports = function(start, end /*, step*/) {
  var step = arguments.length > 2 ? Math.abs(arguments[2]) : 1
  if(isNaN(step)) {
    throw new TypeError("wrong argument `step` provided")
  }
  var min = Math.min(start, end)
  var max = Math.max(start, end)
  var result = []
  while(min <= max) {
    result.push(min)
    min += step
  }
  if(start > end) {
    result.reverse()
  }
  return result
}
