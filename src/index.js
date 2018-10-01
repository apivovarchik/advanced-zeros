module.exports = function getZerosCount(number, base) {
  let i = 2;
  let j = 0;
  let arr = [];
  while (i <= base) {
    if (base % i == 0){
      arr[j] = i;
      j++;
      base /= i;
    } else {      
      i++;
    }    
  }
  let count = 0;
  let t = 0;
  let resArr = [];
  resArr[t] = [];
  let preVal = arr[0];
  arr.forEach(function(e){
    if (preVal == e){
      count += 1;
    } else {
      count = 1;
      t += 1;
      resArr[t] = [];
    }
    preVal = e;
    resArr[t][0] = e;
    resArr[t][1] = count;
  })
  let oldRes = null;
  let result;
  for (let index = 0; index < resArr.length; index++) {
    result = 0; 
    let z = resArr[index][0];
    let k = 1;
    let n = 1;
    while (n >= 1) {
      n = number / Math.pow(z, k);
      result += Math.floor(n);
      k++;
    }
    result = Math.floor(result / resArr[index][1])
    if (oldRes!=null) {
      result =  Math.min(oldRes, result);
      oldRes = result;
    } else {
      oldRes = result;
    }
  }
  return result;
}