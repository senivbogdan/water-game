import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("USER TEST", () => {
  test("render", () => {
    render(<Table/>)
    const buttonReset = screen.getByText("Reset")
    const buttonRun = screen.getByText("Run")

  })
  test("kek", () => {
    render(<Table/>)
    const divs = screen.findAllByTestId("game-divs")  
  })
})