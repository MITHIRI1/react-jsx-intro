const Tweet = (props) => {
    return (
        <div>
            <h2>@{props.username}</h2>
            <h3>{props.name} | {props.date}</h3>
            <p>{props.message}</p>
        </div>
    )
}