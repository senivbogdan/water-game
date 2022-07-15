import { render, screen, RenderResult } from "@testing-library/react";
import { EXDEV } from "constants";
import Table from "./Table";

let documetnTable: RenderResult

describe("USER TEST", () => {
  test("render", () => {
    expect(screen.getByText("Reset") as HTMLElement).toBeInTheDocument()
    expect(screen.getByText("Run") as HTMLElement).toBeInTheDocument()
  })
  test("render table test", () => {
    render(<Table/>)
    const divs = screen.findAllByTestId("game-divs")  
  })
})