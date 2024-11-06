import BookingPage from "./BookingPage"
import ConfirmedBooking from "./ConfirmedBooking"
import './BookingPage.css'
import { useState, useReducer, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { useAvailability, useLoading} from "../context/APIcontext"
import { Formik, useFormik } from "formik"
import { basicSchema } from "../Schema"
const ACTIONS = {
    DATE_CHANGE: "DATE_CHANGE"
}



const Main = () => {
    const navigate = useNavigate()

    let d = new Date()
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    d = yyyy + '-' + mm + '-' + dd

    const [Adults, setAdults] = useState(0)
    const [Children, setChildren] = useState(0)
    const [Seniors, setSeniors] = useState(0)
    const usableTimes = useRef(0)
    const [Fname, setFname] = useState(null)
    const [Lname, setLname] = useState(null)
    const [Pnumb, setPnumb] = useState(null)
    const [Email, setEmail] = useState(null)
    const [currentDate, setCurrentDate] = useState(d)
    const [initialData, setInitialData] = useState(null)

    const handleGuest = event => {
        let Lment = event.currentTarget.id
        if (Lment == "A+"){
            setAdults(Adults + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "A-" && Adults > 0){
            setAdults(Adults - 1)
            console.log("Error:", Lment)
        }

        if (Lment == "B+"){
            setChildren(Children + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "B-" && Children > 0){
            setChildren(Children - 1)
            console.log("Error:", Lment)
        }

        if (Lment == "C+"){
            setSeniors(Seniors + 1)
            console.log("Error:", Lment)
        }

        if (Lment == "C-" && Seniors > 0){
            setSeniors(Seniors - 1 )
            console.log("Error:", Lment)
        }
        event.preventDefault()
    }

    const onSubmit = (event, values) =>{
        setAdults(0)
        setChildren(0)
        setSeniors(0)
        console.log("Fname, Lname, Pnumb, Email")

        if (submitAPIRef.current(values)==true){
            navigate("/ConfirmedBooking")
        }
    }

    const formik = useFormik({
        initialValues:{
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        Occasion:""
    },
    validationSchema: basicSchema,
    onSubmit,
    })


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

    const fetchAPIRef= useRef(null)
    const submitAPIRef= useRef(null)
    const APIdata= useRef(null)
    const [APIStatus, setAPIStatus] = useState("incomplete")

    useEffect(() => {
        const API = async () => {
            const URl = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js'
            let APIAppend =  await fetch(URl).then(response => response.text()).then(data => APIdata.current = data) + ` fetchAPIRef.current = fetchAPI; ` + `submitAPIRef.current = submitAPI;`
            eval(APIAppend)
            setInitialData(fetchAPIRef.current(new Date))
        }
        API()
    },[])

    const initialiseTimes = useAvailability(new Date)

    const updateTimes = (AvailableTimes, action) => {
        if (fetchAPIRef.current) {
            let Times = fetchAPIRef.current(new Date (currentDate))
            setAPIStatus('complete')
            return Times
        }
    }

    const [AvailableTimes, dispatch] = useReducer(updateTimes, initialData,(data) => data)

    useEffect(() => {
        if (fetchAPIRef.current){
            dispatch(new Date)
        }
    }, initialData)

    const changeDate = (event) => {
        setCurrentDate(event.currentTarget.value)
        dispatch({type: "DATE_CHANGE"})
    }

    return(
        <>
            {(1==1)?<BookingPage Adults={Adults}
                                 Children={Children}
                                 Seniors={Seniors}
                                 AvailableTimes={AvailableTimes? AvailableTimes:['Please Select date']}
                                 handleGuest ={handleGuest}
                                 date = {(d) ?currentDate:currentDate}
                                 changeDate = {(changeDate)}
                                 formik = {formik}/>
            :<ConfirmedBooking/>}
        </>
    )
}

export default Main