import {render, screen, cleanup} from '@testing-library/react'
import Navbar from '../Navbar'

test('should render navbar component', () => {
    // expect(true).toBe(true)
    render(<Navbar/>);
    expect(screen.getByDisplayValue).toBeInTheDocument()


    // expect(screen.getByRole("button")).toBeInTheDocument();
    // expect(NavElement).
})
// test('test' , () => {
//     expect(true).toBe(true); 
// })