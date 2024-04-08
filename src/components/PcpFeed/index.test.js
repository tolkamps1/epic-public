import { fireEvent, render, screen } from "@testing-library/react";

import usePcps from "queries/usePcps";

import PcpFeed from ".";

import { HOME_TAB_KEYS } from "constants/home";

jest.mock("queries/usePcps");

describe("PcpFeed tests", () => {
	beforeEach(() => {
		usePcps.mockReturnValue({ isError: false, isSuccess: false });
	});

	const mockOnSelectTab = jest.fn();

	test("PcpFeed renders correctly", () => {
		render(<PcpFeed onSelectTab={mockOnSelectTab} />);

		expect(screen.getByText("Public Comment Periods")).toBeInTheDocument();
		expect(screen.getByText("Upcoming, open, and recently closed Public Comment Periods:")).toBeInTheDocument();
	});

	test("onClick calls onSelectTab with the correct index", () => {
		render(<PcpFeed onSelectTab={mockOnSelectTab} />);

		const footerButton = screen.getByRole("button", { name: "Search all Public Comment Periods >" });
		expect(footerButton).toBeInTheDocument();
		fireEvent.click(footerButton);

		expect(mockOnSelectTab).toHaveBeenCalledWith(HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS);
	});
});
