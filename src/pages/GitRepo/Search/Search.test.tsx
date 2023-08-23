import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "./index";

describe("Search component", () => {
  it("calls handleSearch when the form is submitted", () => {
    // Mock handleSearch and handleOnChange functions
    const mockHandleSearch = jest.fn();
    const mockHandleOnChange = jest.fn();

    // Render the component with mocked functions
    const { getByRole, getByText } = render(
      <Search
        handleSearch={mockHandleSearch}
        handleOnChange={mockHandleOnChange}
      />
    );

    // Get input and button elements
    const input = getByRole("textbox");
    const searchButton = getByText("Search");

    // Simulate typing in the input
    fireEvent.change(input, { target: { value: "testuser" } });

    // Simulate form submission
    fireEvent.click(searchButton);

    // Expect handleSearch and handleOnChange to have been called
    expect(mockHandleSearch).toHaveBeenCalledWith(expect.anything());
    expect(mockHandleOnChange).toHaveBeenCalledWith(expect.anything());
  });

  // You can add more test cases for edge cases and other scenarios
});
