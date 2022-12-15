/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Objectives", () => {
  let linkElement,
    cookiesCheckbox,
    cookiesLabel,
    customTextBox,
    customTextBoxButton;

  beforeEach(() => {
    render(<App />);

    linkElement = screen.getByText(/learn react/i);
    cookiesCheckbox = screen.getByTestId("cookies-checkbox");
    cookiesLabel = screen.getByTestId("cookies-label");
    customTextBox = screen.getByTestId("custom-textbox");
    customTextBoxButton = screen.getByTestId("custom-textbox-button");
  });

  test("si la vista principal contiene el texto learn react", () => {
    expect(linkElement).toBeInTheDocument();
  });

  test("si cambia el texto de aceptación de cookies a 'Cookies aceptadas' al pulsar el checkbox", () => {
    fireEvent.click(cookiesCheckbox);

    expect(cookiesCheckbox).toBeChecked();
    expect(cookiesLabel.textContent).toBe("Cookies aceptadas");
  });

  test("si el párrafo 'lorem ipsum' se inicia con backgroundColor indigo", () => {
    expect(customTextBox).toHaveStyle({
      backgroundColor: "indigo",
    });
  });

  test("si al pulsar el botón cambia el backgroundColor del párrafo 'lorem ipsum' a tomato", () => {
    fireEvent.click(customTextBoxButton);
    expect(customTextBox).toHaveStyle({
      backgroundColor: "tomato",
    });
  });
});
