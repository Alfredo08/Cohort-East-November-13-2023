import { useReducer, useState } from 'react';
import './App.css';
import User from '../User/User';
import UserForm from '../UserForm/UserForm';
import Todo from '../Todo/Todo';
import appReducer from '../../reducers/appReducer';
import TodoForm from '../TodoForm/TodoForm';

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

  const defaultState = {
    users: defaultUsers,
    todos: defaultTodos
  }

  const [state, dispatch] = useReducer(appReducer, defaultState)

  const addNewUser = (newUser) => {
    dispatch({type: 'add_new_user', data: newUser})
  }

  const addNewTodo = (newTodo) => {
    dispatch({type: 'add_new_todo', data: newTodo});
  }

  return (
    <div className="App">
      <h1> Todos App </h1>
      <UserForm addNewUser={addNewUser}/>
      <h2> List of Users </h2>
      {state.users.map((user, index) => {
        return (<User id={user.id} 
                      firstName={user.firstName} 
                      lastName={user.lastName}
                      key={index}/>)
      })}
      <h2> List of todos </h2>
      <TodoForm users={state.users} addNewTodo={addNewTodo} />
      {state.todos.map((todo, index) => {
        return( <Todo description={todo.description}
                      status={todo.status}
                      userId={todo.userId}
                      key={index}/> )
      })}
    </div>
  );
}

export default App;
