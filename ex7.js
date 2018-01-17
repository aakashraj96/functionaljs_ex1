function reduce(arr, fn, initial) {
  
}

module.exports = reduce;

console.log( reduce([1,2,3], function(prev, curr, index, arr) {
	return prev + curr;
}, 0) === 6);
