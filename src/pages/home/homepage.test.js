import { render,screen } from "@testing-library/react"
import HomePage from "./HomePage"



test("Best case :: Checking Welcome text",()=>{
    render(<HomePage />)
    expect(screen.getByText("Welcome To React Js world")).toBeInTheDocument()
})

test("worst case :: Checking Welcome text",()=>{
    render(<HomePage />)
    expect(screen.queryByText("Welcome To React Js worlds")).not.toBeInTheDocument()
})
