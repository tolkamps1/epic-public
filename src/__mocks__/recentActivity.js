import { mockMetPcp, mockPcp } from "./pcps";

export const mockUseRecentActivitiesData = [
	{
		_id: "1",
		content: "Update 1 content",
		dateUpdated: "2022-09-13T23:03:02.878Z",
		headline: "Update 1 headline",
		documentUrl: "https://example.com/document1",
		project: { name: "Project 1" },
		pcp: mockPcp,
	},
	{
		_id: "2",
		content: "Update 2 content",
		dateUpdated: "2022-09-13T23:03:02.878Z",
		headline: "Update 2 headline",
		documentUrl: "https://example.com/document2",
		project: { name: "Project 2" },
		pcp: mockMetPcp,
	},
];
