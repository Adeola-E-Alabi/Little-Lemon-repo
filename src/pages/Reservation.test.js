import { render, screen } from "@testing-library/react";
import Reservation from './Reservations';
import {Main} from '../Components/resMain'

test('Renders the BookingForm heading', () => {
    render(<Reservation />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();

})

test('Renders the BookingForm heading', () => {
    render(<Reservation />);
    const AvailableTimes = jest.fn();
    expect(AvailableTimes).toBe(["5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"])
})