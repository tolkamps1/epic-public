import { FILTER_KEYS, LIST_TYPE_FILTER_KEYS } from "constants/filters";

export const mockUseListsData = [
	{
		searchResults: [
			{ _id: "authorTypeId_1", name: "Local Government", type: LIST_TYPE_FILTER_KEYS[FILTER_KEYS.DOCUMENT_AUTHORS] },
			{ _id: "authorTypeId_2", name: "EAO", type: LIST_TYPE_FILTER_KEYS[FILTER_KEYS.DOCUMENT_AUTHORS] },
			{ _id: "docTypeId_1", name: "Doc Type 1", type: LIST_TYPE_FILTER_KEYS[FILTER_KEYS.DOCUMENT_TYPES] },
			{ _id: "phaseId_1", name: "Phase 1", type: LIST_TYPE_FILTER_KEYS[FILTER_KEYS.DOCUMENT_PROJECT_PHASES] },
			{ _id: "phaseId_2", name: "Phase 2", type: LIST_TYPE_FILTER_KEYS[FILTER_KEYS.PROJECT_PHASES] },
		],
	},
];
