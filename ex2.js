let counter=0;

function dummyf()
{
	counter++;
}


function repeat(func,num)
{
	if(num === 0)
	{
		// console.log('value of counter',counter);
		return counter;
	}
	else
	{
		func();
		return repeat(func,--num);
	}
}

module.exports = repeat;
console.log('Testing return value of repeat',repeat(dummyf,3)===3);
counter = 0;
dummyf();
console.log('Testing what dummyf returns',counter === 1);
