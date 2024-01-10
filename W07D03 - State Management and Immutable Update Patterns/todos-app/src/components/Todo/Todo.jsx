
const Todo = (props) => {
    return (
        <div>
            <h2>
                Descripcion: {props.description}
            </h2>
            <p> User: {props.userId} </p>
            <p> Status: {props.status} </p>
        </div>
    );
}

export default Todo;