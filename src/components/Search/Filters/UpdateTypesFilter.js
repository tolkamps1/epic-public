import { useMemo } from "react";

import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { FILTER_KEYS, UPDATE_TYPES } from "constants";

const filterKey = FILTER_KEYS.UPDATE_TYPES;

const UpdateTypesFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => UPDATE_TYPES.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<ForumOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Types of Update"
		/>
	);
};

export default UpdateTypesFilter;
