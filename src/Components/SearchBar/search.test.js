import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./index";
import user from "@testing-library/user-event";


describe("React Testing Examples for Search Component", () => {
  test("Finds Search Bar", () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("Finds Search Button", () => {
    render(<SearchBar />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("When Search Button is clicked onClickHandler is called", async () => {
    const getNewsData = jest.fn();
    render(<SearchBar getNewsData={getNewsData} />);
    const buttonElement = screen.getByRole("button");
    user.click(buttonElement);
    expect(getNewsData).toHaveBeenCalledTimes(1);
  });

  test("Finds and tests Country Dropdown", () => {
    render(<SearchBar />);
    const countryDropDown = screen.getByLabelText("Country:");
    expect(countryDropDown).toBeInTheDocument();
    user.selectOptions(countryDropDown, "es");
    expect(screen.getByText("Spain").selected).toBeTruthy();
    expect(screen.queryByText("Germany").selected).toBeFalsy();
  });

  test("Finds and tests Sort Dropdown", () => {
    render(<SearchBar />);
    const sortDropDown = screen.getByLabelText("Sort:");
    expect(sortDropDown).toBeInTheDocument();
    user.selectOptions(sortDropDown, "relevance");
    expect(screen.getByText("Relevance").selected).toBeTruthy();
    expect(screen.queryByText("Date").selected).toBeFalsy();
  });

  test("Finds and tests Date Dropdown", () => {
    render(<SearchBar />);
    const dateDropDown = screen.getByLabelText("Date:");
    expect(dateDropDown).toBeInTheDocument();
    user.selectOptions(dateDropDown, "Last Week");
    expect(screen.getByText("Last Week").selected).toBeTruthy();
    expect(screen.queryByText("All Time").selected).toBeFalsy();
  });
});
