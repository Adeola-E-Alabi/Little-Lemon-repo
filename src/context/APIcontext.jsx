import {createContext, useContext,useRef, useEffect, useState, useReducer} from "react";
const availability = createContext()
const submit = createContext()
const doneLoading = createContext()

export const useAvailability = () => {
    return useContext(availability)
}

export const useSubmission = () => {
    return useContext(submit)
}

export const useLoading= () => {
    return useContext(doneLoading)
}

export const APIcontext = ({children}) => {

    const fetchRef = useRef((n) => {
        console.log(`Not Ready Yet: ${n}`)
        return null
    })

    const submitRef = useRef(null)
    const APIdata= useRef(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const API = async () => {
            setLoading(true)
            const URl = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js'
            let APIAppend =  await fetch(URl).then(response => response.text()).then(data => APIdata.current = data + `fetchRef.current = fetchAPI;` + `submitRef.current = submitAPI;`)
            eval(APIAppend)
        }
        API()

    },[])


    return(
        <availability.Provider value = {fetchRef.current}>
            <submit.Provider value = {submitRef.current}>
                <doneLoading.Provider value = {loading}>
                    {children}
                </doneLoading.Provider>
            </submit.Provider>
        </availability.Provider>
    )
}

