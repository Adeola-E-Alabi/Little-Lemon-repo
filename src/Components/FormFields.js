import {Checkbox } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const FormField = (props) => {
    return(
        <div className = "GuestRegistration" id = {props.id}>
            <p>{props.Guest}</p>
            <div className = "Buttons">
                <button onClick = {props.click} id = {props.id + "-"}>
                    <FontAwesomeIcon icon = {faMinus} size = "1x" id = {props.id + "-"}/>
                </button>
                <h3>{props.number}</h3>
                <button onClick = {props.click} id ={ props.id + "+"}>
                    <FontAwesomeIcon icon = {faPlus} size = "1x" id ={ props.id + "+"}/>
                </button>
            </div>
        </div>
    )
}

export default FormField