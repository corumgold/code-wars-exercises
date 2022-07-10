// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//solveCount = 1;

var maxSequence = function (arr) {
  debugger;
  let greatSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let workingSum = arr[i];
    if (workingSum >= greatSum) {
      greatSum = workingSum;
    }
    for (let j = i + 1; j < arr.length; j++) {
      workingSum += arr[j];
      if (workingSum >= greatSum) {
        greatSum = workingSum;
      }
    }
  }
  return greatSum;
};

maxSequence([1]);
