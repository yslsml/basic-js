
module.exports = function transform(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      i++;
    } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next' && arr.length !== 0) {
      res.pop();
    } else if (arr[i] === '--double-next' && i < arr.length - 1) {
      res.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next' && i !== 0) {
      res.push(arr[i - 1]);
    } else if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
      continue;
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
