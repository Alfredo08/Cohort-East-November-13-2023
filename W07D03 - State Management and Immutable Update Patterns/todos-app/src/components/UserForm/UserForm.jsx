import { useState } from "react";

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [id, setId] = useState(-1);
    const [counter, setCounter] = useState(0);

    const handleCounter = (event) => {
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            firstName,
            lastName,
            id
        }
        props.addNewUser(newUser);
    }

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleId = (event) => {
        setId(event.target.value);
    }
    return (
        <div>
            <h2> Counter: {counter} </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">
                        First name:
                    </label>
                    <input type="text" 
                        id="firstName" 
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstName}/>
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last name:
                    </label>
                    <input type="text" 
                        id="lastName" 
                        name="lastName"
                        value={lastName}
                        onChange={handleLastName}/>
                </div>
                <div>
                    <label htmlFor="id">
                        Id:
                    </label>
                    <input type="text" 
                        id="id" 
                        name="id"
                        value={id}
                        onChange={handleId}/>
                </div>
                <button type="submit">
                    Add
                </button>
            </form>
            <button onClick={handleCounter}>
                Add to counter
            </button>
        </div>
    );
}

export default UserForm;