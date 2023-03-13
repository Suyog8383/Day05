let arr = [1, 8, -3, -1, 2, 5];
let target = 0;
function findPair(arr, target) {
  let obj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let data = target - arr[i];
    if (obj.hasOwnProperty(data)) {
      newArr.push(data, arr[i]);
      break;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return newArr;
}
console.log(findPair(arr, target));
