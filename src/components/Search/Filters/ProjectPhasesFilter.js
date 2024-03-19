import { useMemo } from "react";

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import { useSearch } from "contexts/Search";

import useLists from "queries/useLists";

import Filter from "components/Filter";

import { FILTER_KEYS } from "constants";

const filterKey = FILTER_KEYS.PROJECT_PHASES;

const ProjectPhasesFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const { data = [{ searchResults: [] }] } = useLists({ enabled: true });

	const items = useMemo(
		() =>
			data[0].searchResults
				.filter((item) => item.type === "projectPhase")
				.map(({ _id, legislation, name }) => ({
					description: name,
					filterKey,
					key: _id,
					legislation,
				})),
		[data],
	);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			filterKey={filterKey}
			icon={<AccountTreeOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Project Phases"
		/>
	);
};

export default ProjectPhasesFilter;
