const Person = (props) => {
    let messageText = props.age >= 18 ? "Please go vote!" : "You must be 18.";
    let name;
    if (props.name.length > 8) {
        name = props.name.slice(0, 6);
    } else {
        name = props.name;
    }
    let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about {name}</p>
            <h3>{messageText}</h3>
            <ul>
                Hobbies
                {hobbies}
            </ul>
        </div>
    );
};
