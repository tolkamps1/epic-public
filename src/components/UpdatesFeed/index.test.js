import { fireEvent, render, screen, within } from "@testing-library/react";
import { mockUseRecentActivitiesData } from "__mocks__";

import useRecentActivity from "queries/useRecentActivity";

import UpdatesFeed from "../UpdatesFeed";

import { HOME_TAB_KEYS } from "constants/home";

jest.mock("queries/useRecentActivity");

describe("UpdatesFeed tests", () => {
	const mockOnSelectTab = jest.fn();

	beforeEach(() => {
		useRecentActivity.mockReturnValue({ isError: false, isSuccess: true, data: mockUseRecentActivitiesData });
	});

	describe("UpdatesFeed header rendering", () => {
		test("should render the feed header content and call onSelectTab when 'Search All' button is clicked", () => {
			render(<UpdatesFeed onSelectTab={mockOnSelectTab} />);

			const updatesButton = screen.getByRole("button", { name: "Search all Updates >" });
			expect(updatesButton).toBeInTheDocument();
			fireEvent.click(updatesButton);

			expect(mockOnSelectTab).toHaveBeenCalledWith(HOME_TAB_KEYS.UPDATES);
			expect(screen.getByRole("heading", { level: 1, name: "Updates" })).toBeInTheDocument();
		});
	});

	describe("UpdateCard rendering", () => {
		test("should render the expected number of UpdateCard components in a list", () => {
			render(<UpdatesFeed onSelectTab={mockOnSelectTab} />);

			expect(screen.getByRole("list", { name: "Updates list" })).toBeInTheDocument();

			const updateCards = screen.getAllByRole("listitem");
			expect(updateCards.length).toBe(mockUseRecentActivitiesData.length);

			updateCards.forEach((card, i) => {
				const { content, headline } = mockUseRecentActivitiesData[i];

				expect(within(card).getByText(headline)).toBeInTheDocument();
				expect(within(card).getByText(content)).toBeInTheDocument();
			});

			expect(mockOnSelectTab).not.toHaveBeenCalled();
		});
	});
});
