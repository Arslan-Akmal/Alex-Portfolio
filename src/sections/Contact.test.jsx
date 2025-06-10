import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import '@testing-library/jest-dom';

describe("Contact Component", () => {
  it("renders the Contact Me heading", () => {
    render(<Contact />);
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  });

  it("renders the name input", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
  });

  it("renders the email input", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/you@example\.com/i)).toBeInTheDocument();
  });

  it("renders the message textarea", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });
});
