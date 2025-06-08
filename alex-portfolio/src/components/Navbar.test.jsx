import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import '@testing-library/jest-dom';
import { describe, expect, it } from "vitest";


describe("Navbar Component", () => {
    it("renders logo text", () => {
        render(<Navbar />);
        expect(screen.getByText(/alex carter/i)).toBeInTheDocument();
    });

    it("renders navigation links in desktop view", () => {
        render(<Navbar />);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/projects/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();

    });

    it("toggles mobile menu", () => {
        render(<Navbar />);
        const hamburgerButton = screen.getByRole("button", { name: /☰/i });
        fireEvent.click(hamburgerButton);
        expect(screen.getAllByText(/home/i).length).toBeGreaterThan(1);
    });
});

