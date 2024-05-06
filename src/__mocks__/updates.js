export const mockUseUpdatesData = {
	searchResults: [
		{
			_id: "1",
			dateAdded: "2022-01-01T00:00:00.000Z",
			project: {
				_id: "2",
				name: "Project 2",
				currentPhaseName: "phaseId_1",
			},
			type: "News",
			complianceAndEnforcement: true,
		},
		{
			_id: "6",
			dateAdded: "2022-04-21T00:00:00.000Z",
			project: {
				_id: "7",
				name: "Project 7",
				currentPhaseName: "phaseId_2",
			},
			type: "Public Comment Period",
		},
	],
	meta: [{ searchResultsTotal: 2 }],
};
