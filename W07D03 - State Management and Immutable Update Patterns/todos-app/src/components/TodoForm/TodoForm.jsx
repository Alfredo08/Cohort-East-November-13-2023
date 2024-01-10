import { useState } from "react";

const TodoForm = (props) => {

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [userId, setUserId] = useState(-1);


    const handleSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            description,
            status,
            userId
        }

        props.addNewTodo(newTodo);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleStatus = (event) => {
        setStatus(event.target.value);
    }

    const handleUserId = (event) => {
        setUserId(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">
                        Description:
                    </label>
                    <input type="text" 
                        id="description" 
                        name="description"
                        value={description}
                        onChange={handleDescription}/>
                </div>
                <div>
                    <label htmlFor="status">
                        Status:
                    </label>
                    <input type="text" 
                        id="status" 
                        name="status"
                        value={status}
                        onChange={handleStatus}/>
                </div>
                <div>
                    <label htmlFor="userId">
                        User:
                    </label>
                    <select id="userId" name="userId" onChange={handleUserId}>
                        {props.users.map((user, index) => {
                            return (
                                    <option key={index} value={user.id}> 
                                        {user.firstName}
                                    </option>)
                        })}
                    </select>
                </div>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default TodoForm;