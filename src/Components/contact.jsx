const Contact = (props) => {
    return(
        <div className = "contactInfo">
            <input placeholder = {props.label} type={props.type} name = {props.name} value = {props.value} onChange = {props.onChange}></input>
        </div>
    )
}

export default Contact