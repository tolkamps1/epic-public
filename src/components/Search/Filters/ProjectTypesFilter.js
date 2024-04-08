import { useMemo } from "react";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { FILTER_KEYS, PROJECT_TYPES } from "constants/filters";

const filterKey = FILTER_KEYS.PROJECT_TYPES;

const ProjectTypesFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => PROJECT_TYPES.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<BusinessCenterOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Project Type"
		/>
	);
};

export default ProjectTypesFilter;
