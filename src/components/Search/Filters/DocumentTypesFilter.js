import { useMemo } from "react";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import { useSearch } from "contexts/Search";

import Filter from "components/Filter";

import { DOCUMENT_TYPES, FILTER_KEYS } from "constants";

const filterKey = FILTER_KEYS.DOCUMENT_TYPES;

const DocumentTypesFilter = () => {
	const { onFilterChange, selectedFilters } = useSearch();

	const items = useMemo(() => DOCUMENT_TYPES.map((item) => ({ ...item, filterKey })), []);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<ArticleOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Document Types"
		/>
	);
};

export default DocumentTypesFilter;
