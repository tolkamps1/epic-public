import { render, screen } from "@testing-library/react";

import UpdateCard from "./UpdateCard";

describe("UpdateCard tests", () => {
	let mockProject, viewDocumentButtonName, viewPcpButtonName, viewProjectButtonName;

	beforeEach(() => {
		mockProject = {
			_id: "1",
			location: "Location",
			name: "Project 1",
			region: "Region",
			type: "type",
		};
		viewDocumentButtonName = "View Document(s)";
		viewPcpButtonName = "View Engagement";
		viewProjectButtonName = "View Project";
	});

	describe("when the update has no documents or PCPs", () => {
		test("should render the UpdateCard correctly", () => {
			const mockUpdate = {
				documentUrl: "",
				project: mockProject,
				updateContent: "Update content.",
				updateDate: "2022-09-13T23:03:02.878Z",
				updateName: "Update Name",
			};

			render(<UpdateCard {...mockUpdate} />);

			const documentButton = screen.queryByRole("button", { name: viewDocumentButtonName });
			const pcpButton = screen.queryByRole("button", { name: viewPcpButtonName });
			const projectLink = screen.getByText(viewProjectButtonName).closest("a");
			expect(screen.getByText(`${mockUpdate.project.name} - Work`)).toBeInTheDocument();
			expect(screen.getByText(mockUpdate.updateName)).toBeInTheDocument();
			expect(screen.getByText(mockUpdate.updateContent)).toBeInTheDocument();
			expect(documentButton).not.toBeInTheDocument("Document button should not be rendered");
			expect(pcpButton).not.toBeInTheDocument("Pcp button should not be rendered");
			expect(projectLink.pathname).toBe(`/p/${mockUpdate.project._id}/project-details`);
		});
	});

	describe("when the update has a Met PCP and a document URL", () => {
		test("should render the UpdateCard correctly", () => {
			const mockMetPcp = {
				_id: "2",
				isMet: true,
				metURL: "https://example.com/met",
			};
			const mockMetPcpUpdate = {
				documentUrl: "https://example.com/document",
				pcp: mockMetPcp,
				project: mockProject,
				updateContent: "Update content.",
				updateDate: "2022-09-13T23:03:02.878Z",
				updateName: "Update Name",
			};

			render(<UpdateCard {...mockMetPcpUpdate} />);

			const documentLink = screen.getByText(viewDocumentButtonName).closest("a");
			const metLink = screen.getByText(viewPcpButtonName).closest("a");
			const projectLink = screen.getByText(viewProjectButtonName).closest("a");
			expect(screen.getByText(`${mockMetPcpUpdate.project.name} - Work`)).toBeInTheDocument();
			expect(screen.getByText(mockMetPcpUpdate.updateName)).toBeInTheDocument();
			expect(screen.getByText(mockMetPcpUpdate.updateContent)).toBeInTheDocument();
			expect(documentLink.href).toBe(mockMetPcpUpdate.documentUrl);
			expect(metLink.href).toBe(mockMetPcpUpdate.pcp.metURL);
			expect(projectLink.pathname).toBe(`/p/${mockMetPcpUpdate.project._id}/project-details`);
		});
	});

	describe("when the update has an EPIC.public PCP and document URL", () => {
		test("should render the UpdateCard correctly", () => {
			const mockPublicPcp = {
				_id: "3",
				isMet: false,
				metURL: "",
			};
			const mockPublicPcpUpdate = {
				documentUrl: "https://example.com/document",
				pcp: mockPublicPcp,
				project: mockProject,
				updateContent: "Update content.",
				updateDate: "2022-09-13T23:03:02.878Z",
				updateName: "Update Name",
			};

			render(<UpdateCard {...mockPublicPcpUpdate} />);

			const documentLink = screen.getByText(viewDocumentButtonName).closest("a");
			const pcpLink = screen.getByText(viewPcpButtonName).closest("a");
			const projectLink = screen.getByText(viewProjectButtonName).closest("a");
			expect(screen.getByText(`${mockPublicPcpUpdate.project.name} - Work`)).toBeInTheDocument();
			expect(screen.getByText(mockPublicPcpUpdate.updateName)).toBeInTheDocument();
			expect(screen.getByText(mockPublicPcpUpdate.updateContent)).toBeInTheDocument();
			expect(documentLink.href).toBe(mockPublicPcpUpdate.documentUrl);
			expect(pcpLink.pathname).toBe(`/p/${mockPublicPcpUpdate.project._id}/cp/${mockPublicPcpUpdate.pcp._id}`);
			expect(projectLink.pathname).toBe(`/p/${mockPublicPcpUpdate.project._id}/project-details`);
		});
	});
});
