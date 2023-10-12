import { render, fireEvent } from "@testing-library/react";
import MentionInput from "./MentionInput.tsx";

describe("MentionInput Component", () => {
  it("renders without errors", () => {
    render(<MentionInput />);
  });

  it("updates input value when typing", () => {
    const { getByPlaceholderText } = render(<MentionInput />);
    const inputElement = getByPlaceholderText("Mention") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(inputElement.value).toBe("New value");
  });

  // it("adds mentions when a user is selected", () => {
  //   const { getByPlaceholderText, getByText } = render(<MentionInput />);
  //   const inputElement = getByPlaceholderText("Mention") as HTMLInputElement;

  //   fireEvent.click(inputElement);

  //   fireEvent.change(inputElement, { target: { value: "Hello @" } });

  //   const mentionOption = getByText("@Merell");
  //   fireEvent.click(mentionOption);

  //   expect(inputElement.value).toBe("Hello @Merell");
  //   expect(getByText("Merell")).toBeTruthy();
  // });
});
