
let users = [{
    firstName: 'Alex',
    lastName: 'Miller',
    id: 123
  },
  {
    firstName: 'Martha',
    lastName: 'Smith',
    id: 456
  }];

let newUser = {
    firstName: 'Roger',
    lastName: 'Anderson',
    id: 789
}

let copyOfUsers = [newUser, ...users];
//console.log(users);
//console.log(copyOfUsers);


const student = {
    firstName: 'Alex',
    lastName: 'Miller',
    id: 123
  };

const updatedStudent = {
    age: 25,
    id: 789,
    specialty: 'Web Development',
    ...student
}

console.log(student);
console.log(updatedStudent);