import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GithubRepo from "./index";
import * as githubApi from "../../services/githubApi";

jest.mock("../../services/githubApi");

describe("GithubRepo component", () => {

   
  it("displays 'No record found for a user' message when searching for a user with no repositories", async () => {
    const searchRepositoriesMock = jest
      .spyOn(githubApi, "searchRepositories")
      .mockImplementation(() => Promise.resolve({ items: [] }));

    render(<GithubRepo />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "testuser" } });

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
    const noRecordFoundMessage = screen.getByText(/No record found for "testuser"/i);

    await waitFor(() => {
    expect(searchRepositoriesMock).toHaveBeenCalledWith("testuser");
    expect(noRecordFoundMessage).toBeInTheDocument();

    });


    searchRepositoriesMock.mockRestore();
  });
  it("Shows Loading when fetching",async()=>{

    const searchRepositoriesMock = jest
      .spyOn(githubApi, "searchRepositories")
      .mockImplementation(() => Promise.resolve({ items: [] }));

    render(<GithubRepo />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "testuser" } });

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
    const loadingText = screen.getByText(/Loading.../i);

    await waitFor(() => {
    expect(searchRepositoriesMock).toHaveBeenCalledWith("testuser");
    expect(loadingText).toBeInTheDocument();

    });



})

});
