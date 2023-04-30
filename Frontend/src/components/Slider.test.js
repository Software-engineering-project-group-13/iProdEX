import {render, screen} from '@testing-library/react' 
import Slider from "./Slider";

describe(Slider, () => {
    it("Slider works fine or not", () => {
        render(<Slider/>);
        const LeftButton = getByRole("Div", {name : "Arrow"});
        expect(LeftButton).toBeInTheDocument();
    });
});

