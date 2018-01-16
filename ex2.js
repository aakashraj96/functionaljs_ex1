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

 console.log('Testing return value of repeat',repeat(dummyf,3)===3);
 counter = 0;
 console.log('Testing what dummyf returns',dummyf() === 0);