import { render, screen } from "@testing-library/react";
import StoreContent from "../StoreContent";

describe("StoreContent", () => {
  it("should render the Enter Store button", () => {
    render(<StoreContent />);
    expect(screen.getByRole("button", { name: "Enter Store" })).toBeDefined();
  });
});
