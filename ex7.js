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


function isEmpty(obj) {
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
			return false;
	}
	return true;
}
module.exports = reduce;

console.log('Basic function call', reduce([1,2,3], function(prev, curr, index, arr) {
	return prev + curr;
}, 0) === 6);

console.log('Passing an empty array', reduce([], function(prev, curr) {
	return prev + curr;
}, 0) === 0);

console.log('Passing Objects', reduce([{'value': 1},{'value': 2}], function(prev, curr) {
	prev['value'] += curr['value'];
	return prev;
}, {'value':0})['value'] === 3);


console.log('Passing  strings', reduce(['hello','world'], function(prev, curr) {
	return prev + curr;
}, '') === 'helloworld');


console.log('Passing an empty object', isEmpty(reduce([{},{}], function(prev, curr) {
	return prev + curr;
}) === true, {}));
