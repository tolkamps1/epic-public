import { render, screen } from "@testing-library/react";

import Header from "../Header";

import { PAGE_PATHS } from "constants/general";

describe("Header tests", () => {
	test("renders the EAO logo and project name", () => {
		render(<Header />);

		expect(screen.getByRole("heading", { level: 1, name: "Project Information Centre" })).toBeInTheDocument();
		expect(screen.getByAltText("EAO logo")).toBeInTheDocument();
	});

	test("renders the main navigation links", () => {
		render(<Header />);

		const homeLink = screen.getByRole("link", { name: "Home" });
		expect(homeLink).toBeInTheDocument();
		expect(homeLink).toHaveAttribute("href", PAGE_PATHS.HOME);

		const processLink = screen.getByRole("link", { name: "The Environmental Assessment Process" });
		expect(processLink).toBeInTheDocument();
		expect(processLink).toHaveAttribute("href", PAGE_PATHS.PROCESS);

		const contactLink = screen.getByRole("link", { name: "Contact Us" });
		expect(contactLink).toBeInTheDocument();
		expect(contactLink).toHaveAttribute("href", PAGE_PATHS.CONTACT);
	});
});
