
function reducer(accumulator, currentvalue)
{
	if(!Object.keys(accumulator).some( function (value)
		{
			return currentvalue === value;
		})
	)
	{
		accumulator[currentvalue] = 1;
	}
	else
	{
		accumulator[currentvalue]++;
	}
	return accumulator;
	
}



function countWords(inputWords) 
{
	let emptyObj = {};
	let result = inputWords.reduce(reducer,emptyObj);
	console.log(result);
	return result;
}

module.exports = countWords

let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];



console.log('Checking function call',Object.keys(countWords(inputWords)).length === 3);
