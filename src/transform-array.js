const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  /*
  if (!(arr instanceof Array)) throw "Error";
  const newArr = Array.from(arr)

  if (arr[0] == '--discard-next' && newArr.length ==2 ) return []
  if (arr[1] == '--discard-prev' && newArr.length ==2 ) return []

  for (let i=0;i<newArr.length;i++){
    if (arr[i] == '--discard-next' && arr[i+2] == '--double-prev') newArr.splice(i,3)
    if (arr[i] == '--discard-next' && arr[i+2] == '--discard-prev') newArr.splice(i+2,1)
    
    if (arr[i] == '--discard-next' && i!=(newArr.length-1)) newArr.splice(i,2)
    else if (arr[i] == '--discard-next' && i==(newArr.length-1)) newArr.splice(i,1)

    else if (arr[i] == '--discard-prev' && i!=0) newArr.splice(i-1,2)
    else if (arr[i] == '--discard-prev' && i==0) newArr.splice(i,1)

    else if (arr[i] == '--double-next' && i!=(newArr.length-1)) newArr[i]=newArr[i+1]
    else if (arr[i] == '--double-next' && i==(newArr.length-1)) newArr.splice(i,1)

    else if (arr[i] == '--double-prev' && i!=0) newArr[i]=newArr[i-1]
    else if (arr[i] == '--double-prev' && i==0) newArr.splice(i,1)

  }
  return newArr*/
}
