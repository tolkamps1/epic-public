import { render, screen } from "@testing-library/react";

import useOrganizations from "queries/useOrganizations";
import usePcps from "queries/usePcps";
import useRecentActivity from "queries/useRecentActivity";

import App from "./App";

jest.mock("queries/useOrganizations");
jest.mock("queries/usePcps");
jest.mock("queries/useRecentActivity");

describe("App tests", () => {
	beforeEach(() => {
		useOrganizations.mockReturnValue({ isError: false, isSuccess: false });
		usePcps.mockReturnValue({ isError: false, isSuccess: false });
		useRecentActivity.mockReturnValue({ isError: false, isSuccess: false });
	});

	test("renders the app", () => {
		render(<App />);

		expect(screen.getByRole("region", { name: "Header" })).toBeInTheDocument();
		expect(screen.getByRole("tablist", { name: "Main" })).toBeInTheDocument();
		expect(screen.getByRole("tabpanel")).toBeInTheDocument();
	});
});
