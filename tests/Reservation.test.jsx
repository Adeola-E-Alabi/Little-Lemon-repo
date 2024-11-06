import React from 'react'
import {render, screen, act, fireEvent, renderHook} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/react'
import { it, expect, describe } from 'vitest'
import { useState, useReducer, useEffect, useRef } from 'react'
import { useAvailability, useLoading} from "../src/context/APIcontext"
import { APIcontext } from '../src/context/APIcontext'
import userEvent from '@testing-library/user-event'
import { list } from '@chakra-ui/react'
import {Route, Routes} from "react-router-dom";
import Reservations from "../src/pages/Reservations"
/*describe('AvailableTimes', () => {
    it('should Fire the dispatch', async () => {
        render(
        <Main/>
    )
        const {ListofTimes} = renderHook(useLoading)
        const heading = screen.getByText(/Please Select date/i)
        const calendar = screen.getByRole('calendar')
        expect(calendar).toBeInTheDocument()
        expect(heading).toBeInTheDocument()
        const API = async () => {
            const URl = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js'
            let APIAppend =  await fetch(URl).then(response => response.text()).then(data => data)
            eval(APIAppend)
        }
        API()
        const user = userEvent.setup()
        //ListofTimes(new Date)
        console.log(typeof(ListofTimes.current))
        await act(async() => {
            const date = await user.click(calendar)
            console.log(date)
            expect(heading).not.toBeInTheDocument()
        })
    })
})*/

/*describe('AvailableTimes', () => {
    it('Test submit button functionality', async () => {
        render(
        <Main/>
    )
        const submitButton = screen.getByText('Submit')
        expect(submitButton).toBeInTheDocument()
        const user = userEvent.setup()
        await user.click(submitButton)
        const ConfirmedBooking = screen.getByRole('B')
        expect(ConfirmedBooking).toHaveValue(0)
    })
})*/
