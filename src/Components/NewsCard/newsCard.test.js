import React from "react";
import { render, screen } from "@testing-library/react";
import NewsCard from "./index";

describe("React Testing Examples for Search Component", () => {
  test("Finds Card details", () => {
    let dummyData = {
      title:
        "Google's Pixel 7 and 7 Pros design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Googles highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    };

    render(
      <NewsCard
        title={dummyData.title}
        description={dummyData.description}
        content={dummyData.content}
        url={dummyData.url}
        image={dummyData.image}
        publishedAt={dummyData.publishedAt}
        source={dummyData.source}
      />
    );
    const title = screen.getByText("Google's Pixel 7 and 7 Pros design gets revealed even more with fresh crisp renders");
    expect(title).toBeInTheDocument();   

    const description = screen.getByText("Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!");
    expect(description).toBeInTheDocument();   

    const url = screen.getByText("https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800");
    expect(url).toBeInTheDocument();   

    const image = screen.getByAltText("news");
    expect(image).toBeInTheDocument();   
    expect(image.src).toEqual("https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg")

    const publishedAt = screen.getByText("Google's Pixel 7 and 7 Pros design gets revealed even more with fresh crisp renders");
    expect(publishedAt).toBeInTheDocument();   
    
    const source = screen.getByText("Source: PhoneArena");
    expect(source).toBeInTheDocument();   
  });
});
