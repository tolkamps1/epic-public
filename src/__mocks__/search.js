import { HOME_TAB_KEYS } from "constants/home";

export const mockUseSearch = {
	filters: [],
	isSearching: false,
	onClearFilters: jest.fn(),
	onFilterChange: jest.fn(),
	onRemoveFilter: jest.fn(),
	onSearch: jest.fn(),
	onSearchTermChange: jest.fn(),
	searchTerm: "",
	selectedFilters: [],
	tabKey: HOME_TAB_KEYS.PROJECTS,
};
