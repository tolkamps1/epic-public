import { render, screen } from "@testing-library/react";

import { useSearch } from "contexts/Search";

import DateRangeFilter from "./DateRangeFilter";

jest.mock("contexts/Search");

describe("DateRangeFilter tests", () => {
	const mockOnFilterChange = jest.fn();

	beforeEach(() => {
		useSearch.mockReturnValue({
			onFilterChange: mockOnFilterChange,
			selectedFilters: [],
		});
	});

	test("renders the DateRangeFilter component", () => {
		render(<DateRangeFilter filterKey="dateRange" />);

		expect(screen.getByRole("button", { name: "Select Date Range" })).toBeInTheDocument();
	});
});
