import { useMemo } from "react";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { FILTER_KEYS, PROJECT_REGIONS } from "constants/filters";

const filterKey = FILTER_KEYS.PROJECT_REGIONS;

const ProjectRegionsFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => PROJECT_REGIONS.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<PlaceOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Project Regions"
		/>
	);
};

export default ProjectRegionsFilter;
