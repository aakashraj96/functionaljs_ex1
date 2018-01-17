function reduce(arr, fn, initial, index = 0) {
	if(arr.length === index)
	{
		console.log(initial);
		return initial;
	}
	else {
		let result = fn(initial,arr[index]);
		return reduce(arr,fn,result,++index);
	}
}

module.exports = reduce;

console.log('Basic function call', reduce([1,2,3], function(prev, curr, index, arr) {
	return prev + curr;
}, 0) === 6);

console.log('Passing an empty array' reduce([], function(prev, curr) {
	return prev + curr;
}, 0) === 0);
