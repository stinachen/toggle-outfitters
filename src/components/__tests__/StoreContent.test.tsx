// eslint-disable-next-line react/display-name
jest.mock("../inventory", () => () => <div>Inventory</div>);

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StoreContent from "../StoreContent";

describe("StoreContent", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the Enter Store button", () => {
    render(<StoreContent />);
    expect(
      screen.getByRole("button", { name: "Enter Store" })
    ).toBeInTheDocument();
  });
});
