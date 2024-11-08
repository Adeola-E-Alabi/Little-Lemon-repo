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
import {Route, Routes, useNavigate, MemoryRouter} from "react-router-dom";
import Reservations from "../src/pages/Reservations"
import Main from '../src/Components/resMain'
import { basicSchema } from '../src/Schema'
import { Formik } from 'formik'
describe('Reservation Form First Name',  () => {

    it(`should render the First Name input's role as FirstName (valid) and should not render the role as FirstNameError (invalid)`, () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const FirstName = screen.getByRole("FirstName")
        const FirstNameError = screen.queryByRole("FirstNameError")
        const Submit = screen.getByRole('Disabled')
        const AntiSubmit = screen.queryByRole("Enabled")
        expect(Submit).toBeInTheDocument()
        expect(AntiSubmit).not.toBeInTheDocument()
        expect(FirstName).toBeInTheDocument()
        expect(FirstNameError).not.toBeInTheDocument()
    })

    it('should show an error message when First Name field is touched and left empty', async () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        const element = screen.getByRole('FirstName');
        const user = userEvent.setup()
        user.click(element)
        fireEvent.blur(element);
        const elementError = await screen.findByRole('FirstNameError');
        expect(elementError).toBeInTheDocument();
    });
})

describe('Reservation Form Last Name', () => {
    it(`should render the Last Name input's role as LastName (valid) and should not render the role as LastNameError (invalid)`, () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const LastName = screen.getByRole("LastName")
        const LastNameError = screen.queryByRole("LastNameError")
        const Submit = screen.getByRole('Disabled')
        const AntiSubmit = screen.queryByRole("Enabled")
        expect(Submit).toBeInTheDocument()
        expect(AntiSubmit).not.toBeInTheDocument()
        expect(LastName).toBeInTheDocument()
        expect(LastNameError).not.toBeInTheDocument()
    })

    it('should show an error message when First Name field is touched and left empty', async () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        const element = screen.getByRole('LastName');
        const user = userEvent.setup()
        user.click(element)
        fireEvent.blur(element);
        const elementError = await screen.findByRole('LastNameError');
        expect(elementError).toBeInTheDocument();
    });
})

describe('Reservation Form Phone Number', () => {
    it(`should render the Phone Number input's role as PhoneNumber (valid) and should not render the role as PhoneNumberError (invalid)`, () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const element = screen.getByRole("PhoneNumber")
        const elementError = screen.queryByRole("PhoneNumberError")
        const Submit = screen.getByRole('Disabled')
        const AntiSubmit = screen.queryByRole("Enabled")
        expect(Submit).toBeInTheDocument()
        expect(AntiSubmit).not.toBeInTheDocument()
        expect(element).toBeInTheDocument()
        expect(elementError).not.toBeInTheDocument()
    })

    it('should show an error message when First Name field is touched and left empty', async () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        const element = screen.getByRole('PhoneNumber');
        const user = userEvent.setup()
        user.click(element)
        fireEvent.blur(element);
        const elementError = await screen.findByRole('PhoneNumberError');
        expect(elementError).toBeInTheDocument();
    });
})

describe('Reservation Form Occasion', () => {
    it(`should render the Occasion input's role as Occasion (valid) and should not render the role as OccasionError (invalid)`, () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const Occasion = screen.getByRole("Occasion")
        const OccasionError = screen.queryByRole("OccasionError")
        const Submit = screen.getByRole('Disabled')
        const AntiSubmit = screen.queryByRole("Enabled")
        expect(Submit).toBeInTheDocument()
        expect(AntiSubmit).not.toBeInTheDocument()
        expect(Occasion).toBeInTheDocument()
        expect(OccasionError).not.toBeInTheDocument()
    })

    it('should show an error message when First Name field is touched and left empty', async () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        const element = screen.getByRole('Occasion');
        const user = userEvent.setup()
        await user.type(element, "'Something with more than thirty Characters in it'")
        fireEvent.blur(element);
        const elementError = await screen.findByRole('OccasionError');
        expect(elementError).toBeInTheDocument();
    });
})

describe('Reservation Form Email', () => {
    it(`should render the Email input's role as Email (valid) and should not render the role as EmailError (invalid)`, () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const element = screen.getByRole("Email")
        const elementError = screen.queryByRole("EmailError")
        const Submit = screen.getByRole('Disabled')
        const AntiSubmit = screen.queryByRole("Enabled")
        expect(Submit).toBeInTheDocument()
        expect(AntiSubmit).not.toBeInTheDocument()
        expect(element).toBeInTheDocument()
        expect(elementError).not.toBeInTheDocument()
    })

    it('should show an error message when First Name field is touched and left empty', async () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        const element = screen.getByRole('Email');
        const user = userEvent.setup()
        user.click(element)
        fireEvent.blur(element);
        const elementError = await screen.findByRole('EmailError');
        expect(elementError).toBeInTheDocument();
    });
})

describe('Reservation Submit Button', () => {
    it(`should render the Submit Button's role as Enabled`, async () => {
        render(
        <MemoryRouter>
            <Main/>
        </MemoryRouter>
    )
        const Submit = screen.getByTestId('SubmitButton')

        const FirstName = screen.getByRole('FirstName')
        const LastName = screen.getByRole('LastName')
        const PhoneNumber = screen.getByRole('PhoneNumber')
        const Occasion = screen.getByRole('Occasion')
        const Email = screen.getByRole('Email')
        
        const Adults = screen.getByTestId('A+')
        const Seniors = screen.getByTestId('A+')
        const Children = screen.getByTestId('A+')
        
        const user = userEvent.setup()

        await user.tripleClick(Adults)
        fireEvent.blur(Adults);

        await user.tripleClick(Seniors)
        fireEvent.blur(Seniors);

        await user.tripleClick(Children)
        fireEvent.blur(Children);

        await user.type(FirstName,"Adeola")
        fireEvent.blur(FirstName);

        await user.type(LastName,"Alabi")
        fireEvent.blur(LastName);

        await user.type(PhoneNumber,"7809723473")
        fireEvent.blur(PhoneNumber);

        await user.type(Occasion,"Wedding")
        fireEvent.blur(Occasion);

        await user.type(Email,"Adeola.E.Alabi@Gmail.com")
        fireEvent.blur(Email);

        expect(Submit).toHaveRole('Enabled')

    });
})