import { fireEvent, render, screen } from "@testing-library/react";
import { mockUseSearch } from "__mocks__";

import { SearchProvider, useSearch } from "contexts/Search";

import usePcps from "queries/usePcps";

import CommentPeriods from "../CommentPeriods";

import { getTabFilters } from "services/filters";

import { HOME_TAB_KEYS } from "constants/home";

jest.mock("contexts/Search", () => {
	const originalModule = jest.requireActual("contexts/Search");
	return {
		__esModule: true,
		...originalModule,
		useSearch: jest.fn(),
	};
});

jest.mock("services/filters", () => ({
	getTabFilters: jest.fn(),
}));

jest.mock("queries/usePcps");

describe("CommentPeriod tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		usePcps.mockReturnValue({ isError: false, isSuccess: false });
		getTabFilters.mockReturnValue([]);
		useSearch.mockReturnValue({ ...mockUseSearch, tabKey: HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS });
	});

	test("renders the Search and CommentPeriodResults components", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS}>
				<CommentPeriods />
			</SearchProvider>,
		);

		expect(screen.getByRole("heading", { name: "Search Public Comment Periods" })).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Search by keywords for Project Name")).toBeInTheDocument();
	});

	test("initializes filters when the component mounts", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS}>
				<CommentPeriods />
			</SearchProvider>,
		);

		expect(getTabFilters).toHaveBeenCalledWith(HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS);
	});

	test("updates the search term", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS}>
				<CommentPeriods />
			</SearchProvider>,
		);

		const searchInput = screen.getByRole("textbox");
		expect(searchInput).toBeInTheDocument();
		fireEvent.change(searchInput, { target: { value: "test" } });
		expect(mockUseSearch.onSearchTermChange).toHaveBeenCalledWith("test");
	});

	test("clears the selected filters", () => {
		useSearch.mockReturnValue({
			...mockUseSearch,
			selectedFilters: [{ filterKey: "filter1", key: "key1" }],
			tabKey: HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS,
		});

		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS}>
				<CommentPeriods />
			</SearchProvider>,
		);

		const clearFiltersButton = screen.getByRole("button", { name: "Clear Filters" });
		expect(clearFiltersButton).toBeInTheDocument();
		fireEvent.click(clearFiltersButton);
		expect(mockUseSearch.onClearFilters).toHaveBeenCalled();
	});
});
