import { render, screen } from "@testing-library/react";

import PcpCard from "./PcpCard";

describe("PcpCard tests", () => {
	describe("rendering", () => {
		test("renders correctly with valid props", () => {
			render(
				<PcpCard
					dateCompleted={new Date(2023, 3, 30).toISOString()}
					dateStarted={new Date(2023, 3, 1).toISOString()}
					phaseName="Phase"
					projectName="Project"
				/>,
			);

			expect(screen.getByText("Project - Phase")).toBeInTheDocument();
			expect(screen.getByText("April 1, 2023 - April 30, 2023")).toBeInTheDocument();
			expect(screen.getByText("Closed")).toBeInTheDocument();
		});
	});

	describe("status rendering", () => {
		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		tomorrow = tomorrow.toISOString();
		let yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		yesterday = yesterday.toISOString();

		test("renders the correct status for upcoming", () => {
			render(<PcpCard dateCompleted={tomorrow} dateStarted={tomorrow} phaseName="Phase" projectName="Project" />);
			expect(screen.getByText("Upcoming")).toBeInTheDocument();
		});

		test("renders the correct status for open", () => {
			render(<PcpCard dateCompleted={tomorrow} dateStarted={yesterday} phaseName="Phase" projectName="Project" />);
			expect(screen.getByText("Open")).toBeInTheDocument();
		});

		test("renders the correct status for closed", () => {
			render(
				<PcpCard
					dateCompleted={yesterday}
					dateStarted={new Date(2023, 3, 1).toISOString()}
					phaseName="Phase"
					projectName="Project"
				/>,
			);
			expect(screen.getByText("Closed")).toBeInTheDocument();
		});
	});
});
