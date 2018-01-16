function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
      			return false;
      		};
}


let goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

let testAllValid = checkUsersValid(goodUsers);


console.log('Checking function call',testAllValid([
      { id: 2 },
      { id: 1 }
    ]) );