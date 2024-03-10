import { useMemo } from "react";

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { FILTER_KEYS, PROJECT_PHASES } from "constants";

const filterKey = FILTER_KEYS.PROJECT_PHASES;

const ProjectPhasesFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => PROJECT_PHASES.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<AccountTreeOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Project Phases"
		/>
	);
};

export default ProjectPhasesFilter;
