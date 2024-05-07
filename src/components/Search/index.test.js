import { render, screen } from "@testing-library/react";

import { SearchProvider } from "contexts/Search";

import Search from "../Search";

describe("Search component tests", () => {
	const placeholder = "Search projects by keyword";
	const title = "Projects";

	test("renders the component with the correct title and placeholder", () => {
		render(
			<SearchProvider>
				<Search placeholder={placeholder} title={title} />
			</SearchProvider>,
		);
		expect(screen.getByRole("heading", { level: 2, name: `Search ${title}` })).toBeInTheDocument();
		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});
});
