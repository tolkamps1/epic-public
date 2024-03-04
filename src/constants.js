import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import FactoryIcon from "@mui/icons-material/Factory";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import PropaneIcon from "@mui/icons-material/Propane";
import TourIcon from "@mui/icons-material/Tour";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";

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

export const HOME_TABS = [
	{
		filters: [
			FILTER_KEYS.PROJECT_TYPES,
			FILTER_KEYS.PROJECT_REGIONS,
			FILTER_KEYS.PROPONENTS,
			FILTER_KEYS.PROJECT_PHASES,
		],
		key: HOME_TAB_KEYS.PROJECTS,
		name: "Search Projects",
	},
	{
		filters: [
			FILTER_KEYS.DOCUMENT_TYPES,
			FILTER_KEYS.DOCUMENT_AUTHORS,
			FILTER_KEYS.DATE_RANGE,
			FILTER_KEYS.PROJECT_PHASES,
		],
		key: HOME_TAB_KEYS.DOCUMENTS,
		name: "Search Documents",
	},
	{
		filters: [FILTER_KEYS.DATE_RANGE, FILTER_KEYS.PROJECT_PHASES, FILTER_KEYS.STATUS],
		key: HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS,
		name: "Public Comment Periods",
	},
	{
		filters: [FILTER_KEYS.DATE_RANGE, FILTER_KEYS.PROJECT_PHASES, FILTER_KEYS.UPDATE_TYPES],
		key: HOME_TAB_KEYS.UPDATES,
		name: "Updates",
	},
	{
		filters: [
			FILTER_KEYS.PROJECT_TYPES,
			FILTER_KEYS.PROJECT_REGIONS,
			FILTER_KEYS.PROPONENTS,
			FILTER_KEYS.PROJECT_PHASES,
		],
		key: HOME_TAB_KEYS.MAP,
		name: "View Map",
	},
];
// Filter options
export const DATE_RANGE = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];
export const DOCUMENT_AUTHORS = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];
export const DOCUMENT_TYPES = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];
export const PROJECT_PHASES = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];
export const PROJECT_REGIONS = [
	{ description: "Cariboo", key: "Cariboo" },
	{ description: "Kootenay", key: "Kootenay" },
	{ description: "Lower Mainland", key: "Lower Mainland" },
	{ description: "Okanagan", key: "Okanagan" },
	{ description: "Omineca", key: "Omineca" },
	{ description: "Peace", key: "Peace" },
	{ description: "Skeena", key: "Skeena" },
	{ description: "Thompson-Nicola", key: "Thompson-Nicola" },
	{ description: "Vancouver Island", key: "Vancouver Island" },
];
export const PROJECT_TYPES = [
	{ description: "Energy-Electricity", key: "Energy-Electricity", icon: <ElectricalServicesIcon /> },
	{ description: "Energy-Petroleum & Natural Gas", key: "Energy-Petroleum & Natural Gas", icon: <PropaneIcon /> },
	{ description: "Food Processing", key: "Food Processing", icon: <FoodBankIcon /> },
	{ description: "Industrial", key: "Industrial", icon: <FactoryIcon /> },
	{ description: "Mines", key: "Mines", icon: <BusinessCenterOutlinedIcon /> },
	{ description: "Other", key: "Other", icon: <BusinessIcon /> },
	{ description: "Tourist Destination Resorts", key: "Tourist Destination Resorts", icon: <TourIcon /> },
	{ description: "Transportation", key: "Transportation", icon: <EmojiTransportationIcon /> },
	{ description: "Waste Disposal", key: "Waste Disposal", icon: <BusinessCenterOutlinedIcon /> },
	{ description: "Water Management", key: "Water Management", icon: <WaterDamageIcon /> },
];
export const STATUSES = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];

export const UPDATE_TYPES = [
	{ description: "Option 1", key: "1" },
	{ description: "Option 2", key: "2" },
	{ description: "Option 3", key: "3" },
];
