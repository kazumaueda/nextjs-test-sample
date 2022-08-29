import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";

import UserPage from "../pages/user";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Leanne Graham dummy",
        username: "Bret dummy",
        email: "Sincere@april.biz.dummy",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("fetch success", async () => {
  render(<UserPage />);
  userEvent.click(screen.getByRole("button"));
  expect((await screen.findByRole("heading")).textContent).toEqual(
    "name: Leanne Graham dummy"
  );
});

test("fetch failure", async () => {
  server.use(
    rest.get(
      "https://jsonplaceholder.typicode.com/users/1",
      (_, res, ctx) => {
        return res(ctx.status(404));
      }
    )
  );
  render(<UserPage />);
  userEvent.click(screen.getByRole("button"));
  expect((await screen.findByTestId("error")).textContent).toEqual(
    "Request failed"
  );
  expect(screen.queryByRole("heading")).toBeNull();
});