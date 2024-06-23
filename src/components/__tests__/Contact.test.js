import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe('Contact Us page component testing',()=>{
    it("Should load Contact us component", ()=>{
        render(<Contact/>);
        //finds all the headings inside contact component
        const heading = screen.getByRole('heading');
        // assertion to check whether the heading element is loaded or not
        expect(heading).toBeInTheDocument();
    })
    it("Contact us component should contain submit button", ()=>{
        render(<Contact/>);
        //finds all the headings inside contact component
        const button = screen.getByText('Submit')
        // assertion to check whether the heading element is loaded or not
        expect(button).toBeInTheDocument();
    });
    it("Contact us component", ()=>{
        render(<Contact/>);
        //finds all the headings inside contact component
        const inputBoxes = screen.getAllByRole('textbox');
        //when we console log the inputBoxes it returns js object
        // assertion to check whether the heading element is loaded or not
        expect(inputBoxes.length).toBe(2);
    });
    
    
})
