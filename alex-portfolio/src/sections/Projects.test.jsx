import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import '@testing-library/jest-dom';

describe("Projects Component", () => {
  it("renders the heading", () => {
    render(<Projects />);
    expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    render(<Projects />);
    expect(screen.getByText(/Brand Identity Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile App UI\/UX/i)).toBeInTheDocument();
    expect(screen.getByText(/Social Media Compaign/i)).toBeInTheDocument();
    expect(screen.getByText(/Illustration Work/i)).toBeInTheDocument();
  });

  it("renders all project images with alt text", () => {
    render(<Projects />);
    expect(screen.getByAltText(/Brand Identity Design/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Mobile App UI\/UX/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Social Media Compaign/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Illustration Work/i)).toBeInTheDocument();
  });
});
