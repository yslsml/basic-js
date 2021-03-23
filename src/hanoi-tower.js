
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let num = Math.pow(2, disksNumber)-1
  let speed = turnsSpeed/3600
  let sec = Math.floor(num/speed) 
  let obj = {
    turns: num,
    seconds: sec
  }

  return obj
};
