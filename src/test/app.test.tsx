import { render, screen } from "@testing-library/react";
import App from "../App";

describe("LoginPage component", () => {
  test("app component loading", () => {
    render(<App />);
    let appComponent = screen.getByTestId("login-text");
    expect(appComponent).toBeInTheDocument();
  });
});
