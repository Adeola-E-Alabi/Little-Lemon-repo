import BookingPage from "./BookingPage"
import './BookingPage.css'
import {Checkbox } from '@chakra-ui/react'
import FormField from './FormFields'
import Contact from './contact'
import { useState, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { useReducedMotion } from "framer-motion"

const ACTIONS = {
    DATE_CHANGE: "DATE_CHANGE"
}



const Main = () => {

    

    let d = new Date()
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d.getFullYear();
    d = yyyy + '-' + mm + '-' + dd

    const [Adults, setAdults] = useState(0)
    const [Children, setChildren] = useState(0)
    const [Seniors, setSeniors] = useState(0)

    const [Fname, setFname] = useState(null)
    const [Lname, setLname] = useState(null)
    const [Pnumb, setPnumb] = useState(null)
    const [Email, setEmail] = useState(null)
    const [currentDate, setCurrentDate] = useState(d)

    const submitForm = (event) =>{
        setAdults(0)
        setChildren(0)
        setSeniors(0)
        console.log(Fname, Lname, Pnumb, Email)
    }


    const handleGuest = event => {
        let Lment = event.currentTarget.id
        if (Lment == "A+"){
            setAdults(Adults + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "A-"){
            setAdults(Adults - 1)
            console.log("Error:", Lment)
        }

        if (Lment == "B+"){
            setChildren(Children + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "B-"){
            setChildren(Children - 1)
            console.log("Error:", Lment)
        }

        if (Lment == "C+"){
            setSeniors(Seniors + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "C-"){
            setSeniors(Seniors - 1)
            console.log("Error:", Lment)
        }
        event.preventDefault()
    }

    const change = (event) => {
        let Lment = event.currentTarget.name
        let Val = event.currentTarget.value
        if (Lment == "firstName"){
            setFname(Val)
        }

        if (Lment == "lastName"){
            setLname(Val)
        }

        if (Lment == "phoneNumber"){
            setPnumb(Val)
        }

        if (Lment == "Email"){
            setEmail(Val)
        }
    }


        const isWeekday = date => (date.getDay()+1) % 6 !== 0 && (date.getDay()+1) % 7 !== 0;

        let Weekday = isWeekday(new Date(currentDate)) ;
    const changeDate = (event) => {
        setCurrentDate(event.currentTarget.value)
        dispatch({type: "DATE_CHANGE"})
    }

    const initialiseTimes = () => {
        const initTime = Weekday? ["5:00 PM","6:00 PM","7:00 PM","8:00 PM"] :["5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"]
        return initTime
    }

    const updateTimes = (AvailableTimes, action) => {
            const WeekdaySchedule = ["5:00 PM","6:00 PM","7:00 PM","8:00 PM"]
            const WeekendSchedule = ["5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"]
            const Schedule = Weekday? WeekdaySchedule : WeekendSchedule
            return Schedule
        }
    const [AvailableTimes, dispatch] = useReducer(updateTimes,initialiseTimes())
    return(
        <>
            <BookingPage Adults={Adults} Children={Children} Seniors={Seniors} Fname={Fname} Lname={Lname} Pnumb={Pnumb} Email={Email} AvailableTimes={AvailableTimes}
                        handleGuest ={handleGuest} change={change} date = {currentDate} changeDate = {changeDate} submitForm = {submitForm}/>
        </>
    )

}

export default Main