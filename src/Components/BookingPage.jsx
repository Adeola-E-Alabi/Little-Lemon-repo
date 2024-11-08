import './BookingPage.css'
import {Checkbox } from '@chakra-ui/react'
import FormField from './FormFields'
import Contact from './contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useFormikContext } from 'formik'
const BookingPage = (props) =>{
    console.log(props.formik.errors.length)
    console.log("Touched:", props.formik.touched, "Errors:", props.formik.errors);
    return(
        <form className = "ResPag" onSubmit={props.formik.handleSubmit}>
            <header>
                <h1>Make a Reservation</h1>
            </header>
            <div className='Banner'>
                <h2>Guests</h2>
            </div>
                <div className='GuestInfo'>
                    <FormField click = {props.handleGuest} id = "A" role = "A" Guest = "Adults" type ="text" label = "Adult" class = "PartySize" number = {props.Adults} />
                    <FormField click = {props.handleGuest} id = "B" role = "B" Guest = "Children" type ="text" label = "Child" class = "Date" number = {props.Children} />
                    <FormField click = {props.handleGuest} id = "C" role = "C" Guest = "Seniors" type ="text" label = "Senior" class = "Time" number = {props.Seniors} />
                </div>
                <div className='Banner' id = "move">
                    <h2 className = "Banner">Contact Information</h2>
                </div>
                <div className = "contactForm">
                    <Contact 
                        className = {props.formik.errors.firstName && props.formik.touched.firstName? 'input-Error': "contactInfo"}
                        type ="text"
                        role = {props.formik.errors.firstName && props.formik.touched.firstName? "FirstNameError": "FirstName"}
                        label = "First Name"
                        name = "firstName"
                        value = {props.formik.values.firstName}
                        onChange = {props.formik.handleChange}
                        onBlur = {props.formik.handleBlur}/>

                    <Contact
                        className = {props.formik.errors.lastName && props.formik.touched.lastName? 'input-Error': "contactInfo"}
                        type ="text"
                        role = {props.formik.errors.lastName && props.formik.touched.lastName? 'LastNameError': "LastName"}
                        label = "Last Name"
                        name = "lastName"
                        value = {props.formik.values.lastName}
                        onChange = {props.formik.handleChange}
                        onBlur = {props.formik.handleBlur}/>


                    <Contact
                        type ="text"
                        className = {props.formik.errors.phoneNumber && props.formik.touched.phoneNumber? 'input-Error': "contactInfo"}
                        role = {props.formik.errors.phoneNumber && props.formik.touched.phoneNumber? 'PhoneNumberError': "PhoneNumber"}
                        label = "Phone Number"
                        name = "phoneNumber"
                        value = {props.formik.values.phoneNumber}
                        onChange = {props.formik.handleChange}
                        onBlur = {props.formik.handleBlur}/>

                    <Contact
                        type ="text"
                        className = {props.formik.errors.occasion && props.formik.touched.occasion? 'input-Error': "contactInfo"}
                        role = {props.formik.errors.occasion && props.formik.touched.occasion? 'OccasionError': "Occasion"}
                        label = "Occasion"
                        name = "occasion"
                        value = {props.formik.values.occasion}
                        onChange = {props.formik.handleChange}
                        onBlur = {props.formik.handleBlur}/>

                        <Contact
                        type ="text"
                        className = {props.formik.errors.email && props.formik.touched.email? 'input-Error': "contactInfo"}
                        role = {props.formik.errors.email && props.formik.touched.email? "EmailError": "Email"}
                        label = "Email"
                        name = "email"
                        value = {props.formik.values.email}
                        onChange = {props.formik.handleChange}
                        onBlur = {props.formik.handleBlur}/>

                </div>

                <div className = "Banner" role = 'Banner'>
                    <h2 className = "Banner">Date and Time</h2>
                </div>

                <div className='DateTime'>
                    <input 
                        type = "date"
                        role = 'calendar'
                        value = {props.date}
                        onChange={props.changeDate}
                        min={[props.d]}/>

                    <div className='Date'>
                        <select id = "select">
                            {props.AvailableTimes.map(Times => {
                                return(
                                    <option value = {Times} data-testid ={Times}> {Times}</option>
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
                    <button id = "submit-button" type = "submit" disabled = {((props.formik.errors.firstName ||
                                                                              props.formik.errors.lastName ||
                                                                              props.formik.errors.phoneNumber ||
                                                                              props.formik.errors.Occasion ||
                                                                              props.formik.errors.email) &&
                                                                              (props.formik.touched.firstName == true ||
                                                                              props.formik.touched.lastName == true ||
                                                                              props.formik.touched.phoneNumber == true ||
                                                                              props.formik.touched.Occasion == true ||
                                                                              props.formik.touched.email == true) ||
                                                                              (props.Adults == 0 &&
                                                                              props.Children == 0 &&
                                                                              props.Seniors == 0))?
                                                                              true:false} >Submit</button>
                </div>
    </form>
    )
}

export default BookingPage;