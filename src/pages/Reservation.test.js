import { render, screen,shallow } from "@testing-library/react";
import Reservation from './Reservations';
import {Main} from '../Components/resMain'

let header;

test('Renders the BookingForm heading', () => {
    const {getByText} = render(<Reservation />);
    const headingElement = getByText("Make a Reservation").textContent;
    expect(headingElement).toBe("Make a Reservation")

})


test('unit test for the initializeTimes function to validate that it returns the correct expected value', () => {
    const {getByTestId} = render(<Reservation />);
    const AvailableTimes = getByTestId('8:00 PM').textContent;
    expect(AvailableTimes).toBe(' 8:00 PM')
})

test('unit test for the updateTimes function to validate that it returns the same value that is provided in the state', () => {
    const {getByTestId} = render(<Reservation />);
    const AvailableTimes = getByTestId('8:00 PM');
})