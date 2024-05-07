import { fireEvent, render, screen } from "@testing-library/react";
import { mockUseSearch } from "__mocks__";

import { SearchProvider, useSearch } from "contexts/Search";

import useDocuments from "queries/useDocuments";
import useLists from "queries/useLists";

import Documents from "../Documents";

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

jest.mock("queries/useLists");
jest.mock("queries/useDocuments");

describe("Documents tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		useLists.mockReturnValue({ isError: false, isSuccess: false });
		useDocuments.mockReturnValue({ isError: false, isSuccess: false });
		getTabFilters.mockReturnValue([]);
		useSearch.mockReturnValue({ ...mockUseSearch, tabKey: HOME_TAB_KEYS.DOCUMENTS });
	});

	test("renders the Search and DocumentResults components", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.DOCUMENTS}>
				<Documents />
			</SearchProvider>,
		);

		expect(screen.getByRole("heading", { name: "Search Documents" })).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(
				"Search by keywords for Document Types, Document Author, Date Range, and Project Phase",
			),
		).toBeInTheDocument();
	});

	test("initializes filters when the component mounts", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.DOCUMENTS}>
				<Documents />
			</SearchProvider>,
		);

		expect(getTabFilters).toHaveBeenCalledWith(HOME_TAB_KEYS.DOCUMENTS);
	});

	test("updates the search term", () => {
		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.DOCUMENTS}>
				<Documents />
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
			tabKey: HOME_TAB_KEYS.DOCUMENTS,
		});

		render(
			<SearchProvider tabKey={HOME_TAB_KEYS.DOCUMENTS}>
				<Documents />
			</SearchProvider>,
		);

		const clearFiltersButton = screen.getByRole("button", { name: "Clear Filters" });
		expect(clearFiltersButton).toBeInTheDocument();
		fireEvent.click(clearFiltersButton);
		expect(mockUseSearch.onClearFilters).toHaveBeenCalled();
	});
});
