
function reducer(accumulator, currentvalue)
{
	if(accumulator[currentvalue])
	{
		accumulator[currentvalue]++;
	}
	else
	{

		accumulator[currentvalue] = 1;
	}
	return accumulator;

}



function countWords(inputWords)
{
	let emptyObj = {};
	let result = inputWords.reduce(reducer,emptyObj);
	//console.log(result);
	return result;
}

module.exports = countWords;

let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
console.log('Checking function call',Object.keys(countWords(inputWords)).length === 3);

inputWords = [];
console.log('Passing an empty array',Object.keys(countWords(inputWords)).length === 0);
