import React from 'react';
import { it, expect, describe } from 'vitest'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../src/Components/card'
import img from '../src/images/Pasta.jpg'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

const props = {
    dish:img,
    title:'Pasta',
    price:'Pasta',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, libero in vestibulum fermentum,"
}
describe('Card', () => {
    it('should render Hello when the name is provided', () => {
        render(<Card dish = {props.dish} title = {props.title} price = {props.price} description = {props.description}/>)
        const heading = screen.getByRole('img')
        expect(heading).toBeInTheDocument()
    })
})