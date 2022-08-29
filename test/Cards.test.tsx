import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Cards } from "../components/Cards";

test("missing array elements", () => {
  render(<Cards userInfos={[]} />);
  expect(screen.getByText("user info is zero")).toBeInTheDocument();
});

test("exist array elements", () => {
  const dummyUserInfos = [
    { id: 1, name: "tom" },
    {
      id: 2,
      name: "mary",
    },
    {
      id: 3,
      name: "bob",
    },
  ];
  render(<Cards userInfos={dummyUserInfos} />);
  const userInfos = screen
    .getAllByRole("listitem")
    .map((item) => item.textContent);
  const dummyItems = dummyUserInfos.map(
    (item) => `id:${item.id} name:${item.name}`
  );
  expect(userInfos).toEqual(dummyItems);
});