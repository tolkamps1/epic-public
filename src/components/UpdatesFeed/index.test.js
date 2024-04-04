import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import useRecentActivity from "queries/useRecentActivity";

import UpdatesFeed from "../UpdatesFeed";

import { HOME_TAB_KEYS } from "constants/home";

jest.mock("queries/useRecentActivity");

describe("UpdatesFeed tests", () => {
	let mockData, setSelectedTab;

	beforeEach(() => {
		mockData = [
			{
				_id: "1",
				content: "Update 1 content",
				dateUpdated: "2022-09-13T23:03:02.878Z",
				headline: "Update 1 headline",
				documentUrl: "https://example.com/document1",
				project: { name: "Project 1" },
				pcp: { name: "PCP 1" },
			},
			{
				_id: "2",
				content: "Update 2 content",
				dateUpdated: "2022-09-13T23:03:02.878Z",
				headline: "Update 2 headline",
				documentUrl: "https://example.com/document2",
				project: { name: "Project 2" },
				pcp: { name: "PCP 2" },
			},
		];
		setSelectedTab = jest.fn();
		useRecentActivity.mockReturnValue({ isError: false, isSuccess: true, data: mockData });
	});

	describe("UpdatesFeed header rendering", () => {
		test("should render the feed header content", () => {
			render(<UpdatesFeed setSelectedTab={setSelectedTab} />);

			expect(screen.getByText("Updates")).toBeInTheDocument();
			expect(screen.getByRole("button", { name: "Search all Updates >" })).toBeInTheDocument(
				"Search all Updates button should be rendered",
			);
		});

		test("should call setSelectedTab when 'Search All' button is clicked", () => {
			render(<UpdatesFeed setSelectedTab={setSelectedTab} />);

			const updatesButton = screen.getByText("Search all Updates >");
			fireEvent.click(updatesButton);

			expect(setSelectedTab).toHaveBeenCalledWith(HOME_TAB_KEYS.UPDATES);
		});
	});

	describe("UpdateCard rendering", () => {
		test("should render the UpdateCard components", async () => {
			render(<UpdatesFeed setSelectedTab={setSelectedTab} />);

			await waitFor(() => {
				expect(screen.getByText("Update 1 headline")).toBeInTheDocument();
				expect(screen.getByText("Update 2 headline")).toBeInTheDocument();
				expect(screen.getByText("Update 1 content")).toBeInTheDocument();
				expect(screen.getByText("Update 2 content")).toBeInTheDocument();
			});
			expect(screen.getByText("Updates")).toBeInTheDocument();
			expect(setSelectedTab).toHaveBeenCalledTimes(0);
		});

		test("should render the expected number of UpdateCard components in a list", () => {
			render(<UpdatesFeed setSelectedTab={setSelectedTab} />);

			const updateCards = screen.querySelectorAll("ul li");
			expect(updateCards.length).toBe(mockData.length);
		});
	});
});
