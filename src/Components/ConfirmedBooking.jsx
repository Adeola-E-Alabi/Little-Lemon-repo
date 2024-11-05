import './BookingPage.css'
import {Checkbox } from '@chakra-ui/react'
import FormField from './FormFields'
import Contact from './contact'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const ConfirmedBooking = (props) =>{
    const date = "2022-12-20"
    const Message = (`Your Booking is confirmed for ${date}` )
    return(
            <div className='ConfirmationPage'>
                <h1 role = "Confirmed">Confirmed</h1>
                <FontAwesomeIcon icon="fa-solid fa-circle-check" size='3x' />
                <p>{Message}</p>
            </div>
    )
}

export default ConfirmedBooking;