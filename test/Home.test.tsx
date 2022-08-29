import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("render Search", () => {
  render(<Home />);
  expect(screen.getByText("Search")).toBeInTheDocument();
});