import * as yup from 'yup'
import 'yup-phone'

const ErrorMessage = "Required"
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email.").required(ErrorMessage),
    firstName: yup.string().required(ErrorMessage),
    lastName: yup.string().required(ErrorMessage),
    phoneNumber: yup.number().required(ErrorMessage),
    Occasion: yup.string().max(30,"30 Character Limit")
})