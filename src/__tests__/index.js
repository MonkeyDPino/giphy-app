import { render, screen, fireEvent } from "@testing-library/react";
import App from "App";

// test('renders learn react link', () => {
//   render(<App />);
//   const title = screen.getByText(/Última Busqueda/i);
//   expect(title).toBeInTheDocument();
// });

test("busqueda de avengers", async () => {
  render(<App />);
  const textbox = await screen.findByRole("textbox");
  expect(textbox).toBeVisible();

  fireEvent.change(textbox, {target:{ value: "Avengers" }});
  const button = await screen.findByRole("button");
  expect(button).toBeVisible();

  fireEvent.click(button);
  const title = await screen.findByText(/Avengers/i);
  expect(title).toBeInTheDocument();
});
