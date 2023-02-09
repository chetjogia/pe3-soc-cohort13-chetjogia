import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";
import user from "@testing-library/user-event";


describe("React Testing Examples for Search Component", () => {

  test("Finds and tests Language Dropdown", () => {
    const handleLanguage = jest.fn();
    render(<Header handleLanguage={handleLanguage}/>);
    const languageDropDown = screen.getByLabelText("Set Region/Language:");
    expect(languageDropDown).toBeInTheDocument();
    user.selectOptions(languageDropDown, "Dutch");
    expect(screen.getByText("Dutch").selected).toBeTruthy();
    expect(screen.queryByText("All").selected).toBeFalsy();
  });


  test("Finds Logo on screen", () => {
    const handleLanguage = jest.fn();
    render(<Header handleLanguage={handleLanguage}/>);
    const companyLogo = screen.getByAltText("logo");
    expect(companyLogo).toBeInTheDocument();
  });


  test("Testing Top Stories button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Top Stories")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing World button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("World")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Nation button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Nation")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Business button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Business")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Entertainment button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Entertainment")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Sports button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Sports")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Science button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Science")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })

  test("Testing Health button",()=>{
    const getTopNews = jest.fn()
    render(<Header getTopNews={getTopNews}/>)
    const topStoriesButton = screen.getByText("Health")
    expect(topStoriesButton).toBeInTheDocument();
    user.click(topStoriesButton)
    expect(getTopNews).toHaveBeenCalledTimes(1);
  })



});
