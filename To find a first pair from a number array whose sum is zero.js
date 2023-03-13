let arr = [1, 8, -3, -1, 2, 5];
let target = 0;
function findPair(arr, target) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        final.push(arr[i], arr[j]);
        return final;
      }
    }
  }
  return true;
}
console.log(findPair(arr, target));
