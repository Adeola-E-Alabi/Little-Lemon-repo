const Contact = (props) => {
    return(
        <div className = {props.className}>
            <input className = {props.className} placeholder = {props.label} type={props.type} name = {props.name} value = {props.value} onChange = {props.onChange} onBlur ={props.onBlur} required></input>
        </div>
    )
}

export default Contact