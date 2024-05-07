import { render, screen } from "@testing-library/react";
import { mockUseListsData } from "__mocks__";

import { useSearch } from "contexts/Search";

import useLists from "queries/useLists";

import DocumentTypesFilter from "./DocumentTypesFilter";

jest.mock("contexts/Search");
jest.mock("queries/useLists");

describe("DocumentTypesFilter tests", () => {
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

	test("renders the DocumentTypesFilter component", () => {
		render(<DocumentTypesFilter />);

		expect(screen.getByRole("button", { name: "Select Document Types" })).toBeInTheDocument();
	});
});
