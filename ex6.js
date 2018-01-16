function countWords(inputWords) 
{
	return inputWords;
}

module.exports = countWords

let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];


console.log('Checking function call',Object.keys(countWords(inputWords)).length === 3);
