import { useMemo } from "react";

import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { FILTER_KEYS, STATUSES } from "constants/filters";

const filterKey = FILTER_KEYS.STATUS;

const StatusFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => STATUSES.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<ForumOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Status"
		/>
	);
};

export default StatusFilter;
