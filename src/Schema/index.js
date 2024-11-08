import * as yup from 'yup'
import 'yup-phone'

const ErrorMessage = "Required"
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email.").required(ErrorMessage),
    firstName: yup.string().min(2).required(ErrorMessage),
    lastName: yup.string().min(2).required(ErrorMessage),
    phoneNumber: yup.number().required(ErrorMessage),
    occasion: yup.string().max(30).required()
})