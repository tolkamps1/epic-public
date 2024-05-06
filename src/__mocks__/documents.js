export const mockUseDocumentsData = {
	searchResults: [
		{
			_id: "1",
			datePosted: "2024-03-06T19:15:48.480Z",
			displayName: "Document 1",
			documentAuthorType: "authorTypeId_1",
			documentFileName: "document1.pdf",
			internalOriginalName: "document1.pdf",
			project: { _id: "2", name: "Project 2" },
			projectPhase: "phaseId_1",
			type: "docTypeId_1",
		},
		{
			_id: "5",
			datePosted: "2024-03-07T19:15:48.480Z",
			displayName: "Document 5",
			documentAuthorType: "authorTypeId_2",
			documentFileName: "document5.pdf",
			internalOriginalName: "document5.pdf",
			project: { _id: "3", name: "Project 3" },
			projectPhase: "phaseId_1",
			type: "docTypeId_1",
		},
	],
	meta: [{ searchResultsTotal: 2 }],
};
