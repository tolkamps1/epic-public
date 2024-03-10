import { useMemo } from "react";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { DATE_RANGE, FILTER_KEYS } from "constants";

const filterKey = FILTER_KEYS.DATE_RANGE;

const DateRangeFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => DATE_RANGE.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<DateRangeOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Date Range"
		/>
	);
};

export default DateRangeFilter;
