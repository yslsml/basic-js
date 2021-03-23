
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr instanceof Array) {
      let depth = 0;
      for (let i = 0; i < arr.length; i++) {
        let cur = this.calculateDepth(arr[i]);
        if (depth < cur) {
        depth = cur;
        }
      }
      return depth + 1;
    } 
    else return 0;
  }
};