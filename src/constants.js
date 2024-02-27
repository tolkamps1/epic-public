export const FILTER_KEYS = {
	DATE_RANGE: "dateRange",
	DOCUMENT_AUTHORS: "documentAuthors",
	DOCUMENT_TYPES: "documentTypes",
	PROJECT_PHASES: "projectPhases",
	PROJECT_REGIONS: "projectRegions",
	PROJECT_TYPES: "projectTypes",
	PROPONENTS: "proponents",
	STATUS: "status",
	UPDATE_TYPES: "updateTypes",
};
export const HOME_TAB_KEYS = {
	PROJECTS: 0,
	DOCUMENTS: 1,
	PUBLIC_COMMENT_PERIODS: 2,
	UPDATES: 3,
	MAP: 4,
};
export const FILTERS = {
	[HOME_TAB_KEYS.PROJECTS]: [
		FILTER_KEYS.PROJECT_TYPES,
		FILTER_KEYS.PROJECT_REGIONS,
		FILTER_KEYS.PROPONENTS,
		FILTER_KEYS.PROJECT_PHASES,
	],
	[HOME_TAB_KEYS.DOCUMENTS]: [
		FILTER_KEYS.DOCUMENT_TYPES,
		FILTER_KEYS.DOCUMENT_AUTHORS,
		FILTER_KEYS.DATE_RANGE,
		FILTER_KEYS.PROJECT_PHASES,
	],
	[HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS]: [FILTER_KEYS.DATE_RANGE, FILTER_KEYS.PROJECT_PHASES, FILTER_KEYS.STATUS],
	[HOME_TAB_KEYS.UPDATES]: [FILTER_KEYS.DATE_RANGE, FILTER_KEYS.PROJECT_PHASES, FILTER_KEYS.UPDATE_TYPES],
	[HOME_TAB_KEYS.MAP]: [
		FILTER_KEYS.PROJECT_TYPES,
		FILTER_KEYS.PROJECT_REGIONS,
		FILTER_KEYS.PROPONENTS,
		FILTER_KEYS.PROJECT_PHASES,
	],
};
export const PROJECT_TYPES = [
	{ description: "Energy-Electricity", key: "Energy-Electricity" },
	{ description: "Energy-Petroleum & Natural Gas", key: "Energy-Petroleum & Natural Gas" },
	{ description: "Food Processing", key: "Food Processing" },
	{ description: "Industrial", key: "Industrial" },
	{ description: "Mines", key: "Mines" },
	{ description: "Other", key: "Other" },
	{ description: "Tourist Destination Resorts", key: "Tourist Destination Resorts" },
	{ description: "Transportation", key: "Transportation" },
	{ description: "Waste Disposal", key: "Waste Disposal" },
	{ description: "Water Management", key: "Water Management" },
];
