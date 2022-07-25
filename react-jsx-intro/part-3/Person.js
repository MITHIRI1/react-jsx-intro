const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>Hobbies:
                    {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
            <h3>{(props.age >= 18)? "please go vote!": "you must be 18"}</h3>
        </div>
    )
};