import { useState } from 'react';
import './App.css';
import User from '../User/User';
import UserForm from '../UserForm/UserForm';
import Todo from '../Todo/Todo';

const App = () => {
  const defaultUsers = [{
    firstName: 'Alex',
    lastName: 'Miller',
    id: 123
  },
  {
    firstName: 'Martha',
    lastName: 'Smith',
    id: 456
  }];

  const defaultTodos = [{
    description: 'Learn React',
    status: 'In progress',
    userId: 123
  },
  {
    description: 'Learn jQuery',
    status: 'Complete',
    userId: 123
  },
  {
    description: 'Learn Angular',
    status: 'Cancelled',
    userId: 456
  }];

  const [users, setUsers] = useState(defaultUsers);
  const [todos, setTodos] = useState(defaultTodos);

  const addNewUser = (newUser) => {
    /*
    const copyOfUsers = [];

    for(let i = 0; i < users.length; i ++ ){
      copyOfUsers.push(users[i]);
    }
    copyOfUsers.push(newUser);
    */
    //users.push(newUser); // This is not the right way of updating the state
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <h1> Todos App </h1>
      <UserForm addNewUser={addNewUser}/>
      <h2> List of Users </h2>
      {users.map((user, index) => {
        return (<User id={user.id} 
                      firstName={user.firstName} 
                      lastName={user.lastName}
                      key={index}/>)
      })}
      <h2> List of todos </h2>
      {todos.map((todo, index) => {
        return( <Todo description={todo.description}
                      status={todo.status}
                      userId={todo.userId}
                      key={index}/> )
      })}
    </div>
  );
}

export default App;
