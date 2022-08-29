import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import BlogPage from "../pages/blog";

// Ref: Testing Asynchronous Code
// https://deltice.github.io/jest/docs/ja/asynchronous.html

test("render fetch method before data is retrieved", async () => {
  render(<BlogPage />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("render fetch method after data is retrieved", async () => {
  render(<BlogPage />);
  expect(await screen.findByText(/ID:/)).toBeInTheDocument();
});