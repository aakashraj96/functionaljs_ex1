function checkUsersValid(goodUsers) 
{
    return function allUsersValid(submittedUsers) 
    {
   		return submittedUsers.every(function (obj)
     	{
      		return decision = goodUsers.some( function (element)
      		{
   				return element.id === obj.id;
      		});									
      	});
    };
}


let goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

let testAllValid = checkUsersValid(goodUsers);


// console.log('Checking function call',testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ]) === true);


// console.log('Checking function call',testAllValid([
//       { id: 2 },
//       { id: 1 },
//       { id: 4 }
//     ]) === false);


module.exports = checkUsersValid
