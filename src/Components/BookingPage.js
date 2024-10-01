import './BookingPage.css'
import {Checkbox } from '@chakra-ui/react'
import FormField from './FormFields'
import Contact from './contact'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

const BookingPage = (props) =>{


    return(
        <form className = "ResPag">
            <header>
                <h1>Make a Reservation</h1>
            </header>
            <div className='Banner'>
                <h2>Guests</h2>
            </div>
                <div className='GuestInfo'>
                    <FormField click = {props.handleGuest} id = "A" Guest = "Adults" type ="text" label = "Adult" class = "PartySize" number = {props.Adults} />
                    <FormField click = {props.handleGuest} id = "B" Guest = "Children" type ="text" label = "Child" class = "Date" number = {props.Children} />
                    <FormField click = {props.handleGuest} id = "C" Guest = "Seniors" type ="text" label = "Senior" class = "Time" number = {props.Seniors} />
                </div>
                <div className='Banner' id = "move">
                    <h2 className = "Banner">Contact Information</h2>
                </div>
                <div className = "contactForm">
                    <Contact type ="text" label = "First Name" name = "firstName" value = {props.Fname} onChange = {props.change}/>
                    <Contact type ="text" label = "Last Name" name = "lastName" value = {props.Lname} onChange = {props.change}/>
                    <Contact type ="text" label = "Phone Number" name = "phoneNumber" value = {props.Pnumb} onChange = {props.change}/>
                    <Contact type ="text" label = "Email" name = "Email" value = {props.Email} onChange = {props.change}/>
                </div>
                <div className = "Banner">
                    <h2 className = "Banner">Date and Time</h2>
                </div>
                <div className='DateTime'>
                    <input type = "date" value = {props.date} onChange={props.changeDate}></input>
                    <div className='Date'>
                        <select id = "select">
                            {props.AvailableTimes.map(Times => {
                                return(
                                    <option value = {Times}>{Times}</option>
                                )
                            })}
                        </select>
                        <FontAwesomeIcon icon={faClock} id = 'clock' />
                    </div>
                </div>
                <div className='submitButtons'>
                    <div id = "Confirmation">
                        <Checkbox>Recieve Email Confirmation</Checkbox>
                    </div>
                    <button id = "submit-button" type = "submit" onClick = {props.submitForm}>Submit</button>
                </div>
    </form>
    )
}

export default BookingPage;