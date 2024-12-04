import { screen, render } from "@testing-library/react";
import App from "./App";

describe("tests App.tsx", () => {
  it("checks if app renders properly", () => {
    render(<App />);
    const target = screen.getByRole("heading", {
      level: 1,
    });

    expect(target).toHaveTextContent("Vite + React");
  });
});
