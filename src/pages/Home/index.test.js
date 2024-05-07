import { fireEvent, render, screen } from "@testing-library/react";

import useDocuments from "queries/useDocuments";
import useLists from "queries/useLists";
import useOrganizations from "queries/useOrganizations";
import usePcps from "queries/usePcps";
import useProjects from "queries/useProjects";
import useRecentActivity from "queries/useRecentActivity";
import useUpdates from "queries/useUpdates";

import Home from "../Home";

import { HOME_TAB_KEYS, HOME_TABS } from "constants/home";

jest.mock("queries/useDocuments");
jest.mock("queries/useLists");
jest.mock("queries/useOrganizations");
jest.mock("queries/usePcps");
jest.mock("queries/useProjects");
jest.mock("queries/useRecentActivity");
jest.mock("queries/useUpdates");

describe("Home page tests", () => {
	beforeEach(() => {
		useDocuments.mockReturnValue({ isError: false, isSuccess: false });
		useLists.mockReturnValue({ isError: false, isSuccess: false });
		useOrganizations.mockReturnValue({ isError: false, isSuccess: false });
		usePcps.mockReturnValue({ isError: false, isSuccess: false });
		useProjects.mockReturnValue({ isError: false, isSuccess: false });
		useRecentActivity.mockReturnValue({ isError: false, isSuccess: false });
		useUpdates.mockReturnValue({ isError: false, isSuccess: false });
	});

	test("renders all the tabs correctly", () => {
		render(<Home />);

		HOME_TABS.forEach((tab) => {
			expect(screen.getByRole("tab", { name: tab.name })).toBeInTheDocument();
		});
	});

	test("switches to the correct tab content when a tab is clicked", () => {
		render(<Home />);

		HOME_TABS.forEach((tab) => {
			if (tab.key === HOME_TAB_KEYS.MAP) return;
			fireEvent.click(screen.getByRole("tab", { name: tab.name }));
			expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(new RegExp(tab.name));
		});
	});

	test("shows the UpdatesFeed and PcpFeed when the Projects tab is selected", () => {
		render(<Home />);

		fireEvent.click(screen.getByRole("tab", { name: HOME_TABS[HOME_TAB_KEYS.PROJECTS].name }));
		expect(screen.getByRole("list", { name: "Updates list" })).toBeInTheDocument();
		expect(screen.getByRole("list", { name: "Public Comment Period list" })).toBeInTheDocument();
	});
});
