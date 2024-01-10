
const User = (props) => {
    return (
        <div>
            <h2>
                Full name: {props.firstName} {props.lastName}
            </h2>
            <p> ID: {props.id}</p>
        </div>
    );
}

export default User;