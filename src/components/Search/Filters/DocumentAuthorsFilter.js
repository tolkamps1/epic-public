import { useMemo } from "react";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { DOCUMENT_AUTHORS, FILTER_KEYS } from "constants/filters";

const filterKey = FILTER_KEYS.DOCUMENT_AUTHORS;

const DocumentAuthorsFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => DOCUMENT_AUTHORS.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<PersonOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Document Authors"
		/>
	);
};

export default DocumentAuthorsFilter;
