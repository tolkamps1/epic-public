import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import usePcps from "queries/usePcps";

import PcpFeed from ".";

import { HOME_TAB_KEYS } from "constants/home";

jest.mock("queries/usePcps");

describe("PcpFeed tests", () => {
	beforeEach(() => {
		usePcps.mockReturnValue({ isError: false, isSuccess: false });
	});

	const mockSetSelectedTab = jest.fn();

	test("PcpFeed renders correctly", () => {
		render(<PcpFeed setSelectedTab={mockSetSelectedTab} />);

		expect(screen.getByText("Public Comment Periods")).toBeInTheDocument();
		expect(screen.getByText("Upcoming, open, and recently closed Public Comment Periods:")).toBeInTheDocument();
	});

	test("handleTabButtonClick calls setSelectedTab with the correct index", () => {
		render(<PcpFeed setSelectedTab={mockSetSelectedTab} />);

		const footerButton = screen.getByRole("button", { name: "Search all Public Comment Periods >" });
		footerButton.click();

		expect(mockSetSelectedTab).toHaveBeenCalledWith(HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS);
	});
});
