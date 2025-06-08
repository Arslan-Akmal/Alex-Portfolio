import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, expect, it } from "vitest";


describe("Home Component", () => {
    it("renders the main heading", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: /Hi I'm Alex Carter/i })
        ).toBeInTheDocument();
    });

    it("renders the subheading", () => {
        render(<Home />);
        expect(
            screen.getByText(/A creative graphic designer crafting clean/i)
        ).toBeInTheDocument();
    });
    
    it("renders the paragraph description", () => {
    render(<Home />);
    expect(
      screen.getByText(/With 5\+ years of experience/i)
    ).toBeInTheDocument();
  });

    it("renders the 'View My Work' button", () => {
        render(<Home />);
        const button = screen.getByRole("link", { name: /View My Work/i});
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("href", "#projects");
    });
});
