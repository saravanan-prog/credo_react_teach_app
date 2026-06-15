import { render,screen } from "@testing-library/react"
import DemoPage from "./demoPage"

test("demo page render test",()=>{

    render(<DemoPage/>)

    const headingElement = screen.getByRole('heading', {
      name: /hello demo page/i,
    });

    expect(headingElement).toBeInTheDocument();
})