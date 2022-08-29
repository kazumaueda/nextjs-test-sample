import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { SearchForm } from "../components/SearchForm";

// mock function
const onSubmit = jest.fn();

test("render SearchForm", () => {
  render(<SearchForm onSubmit={onSubmit} />);
  expect(screen.getByRole("textbox")).toBeTruthy();
  expect(screen.getByRole("button")).toBeTruthy();
});

test("button click", () => {;
  render(<SearchForm onSubmit={onSubmit} />);
  userEvent.click(screen.getByRole("button"));
  expect(onSubmit).not.toHaveBeenCalled();
});

it("trigger output function", () => {
  render(<SearchForm onSubmit={onSubmit} />);
  const inputValue = screen.getByRole("textbox");
  userEvent.type(inputValue, "test");
  userEvent.click(screen.getByRole("button"));
  expect(onSubmit).toBeCalled;
});