function doubleAll(numbers) {
	let result = numbers.map(element => element*2);
	return result;
}

function arrayEqual(first,second)
{
	if(first.length === second.length)
	{
		for(let i=0;i<first.length;i++)
		{
			if(first[i] !== second[i])
			{
				return false;
			}
		}
		return true;
	}
	else
	{
		return false;
	}
}

console.log('Testing doubleAll call',arrayEqual(doubleAll([1,2,3]),[2,4,6]));
