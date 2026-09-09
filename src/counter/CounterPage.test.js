import { fireEvent, render, screen } from "@testing-library/react"
import CounterPage from "./CounterPage"

test("count Button checking",()=>{
    render(<CounterPage />)
    const findBtnelement = screen.getByText(/ADD/i)
    expect(findBtnelement).toBeInTheDocument();
})

test("Counter Title is there or not",()=>{
    render(<CounterPage />)
    const findBtnelement = screen.getByText(/Counter/i)
    expect(findBtnelement).toBeInTheDocument();
})

test("best case: Add button increases count by 1", () => {
    render(<CounterPage />)

    fireEvent.click(screen.getByRole("button", { name: /add/i }))

    expect(screen.getByText(/Current : 1/i)).toBeInTheDocument()
})

test("worst case: Add button works for multiple clicks", () => {
    render(<CounterPage />)
    const addButton = screen.getByRole("button", { name: /add/i })

    fireEvent.click(addButton)
    fireEvent.click(addButton)

    expect(screen.getByText(/Current : 2/i)).toBeInTheDocument()
})
