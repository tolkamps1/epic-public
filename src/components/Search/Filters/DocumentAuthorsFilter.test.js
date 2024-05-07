import { render, screen } from "@testing-library/react";
import { mockUseListsData } from "__mocks__";

import { useSearch } from "contexts/Search";

import useLists from "queries/useLists";

import DocumentAuthorsFilter from "./DocumentAuthorsFilter";

jest.mock("contexts/Search");
jest.mock("queries/useLists");

describe("DocumentAuthorsFilter tests", () => {
	const mockOnFilterChange = jest.fn();

	beforeEach(() => {
		useLists.mockReturnValue({
			data: mockUseListsData,
		});
		useSearch.mockReturnValue({
			onFilterChange: mockOnFilterChange,
			selectedFilters: [],
		});
	});

	test("renders the DocumentAuthorsFilter component", () => {
		render(<DocumentAuthorsFilter />);

		expect(screen.getByRole("button", { name: "Select Document Authors" })).toBeInTheDocument();
	});
});
