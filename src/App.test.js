import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test rain", () => {
  test("render", () => {
    render(<App/>)
    const rainBut = screen.findAllByTestId("rain-div") 
  })
})