
module.exports = function repeater(str, options) {
  if (options.separator == undefined) options.separator = '+'
  if (options.additionSeparator == undefined) options.additionSeparator = '|'
  if (options.repeatTimes == undefined || options.repeatTimes == NaN) options.repeatTimes  = 1
  if (options.additionRepeatTimes == undefined || options.additionRepeatTimes == NaN) options.additionRepeatTimes = 1

  let addd =''


    addd= options.addition + options.additionSeparator
    add=addd.repeat(options.additionRepeatTimes-1) + options.addition
  

  
  let answerr = String(str) + add + options.separator
  
  let answer = answerr.repeat(options.repeatTimes-1) + String(str) + add

  return String(answer)
};
  