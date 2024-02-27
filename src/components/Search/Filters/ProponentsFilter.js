import { FILTER_KEYS } from "constants";
import { useMemo } from "react";

import { useSearch } from "contexts/Search";

import useOrganizations from "queries/useOrganizations";

import Filter from "components/Filter";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const filterKey = FILTER_KEYS.PROPONENTS;

const ProponentsFilter = ({ onChange, value }) => {
	const { onFilterChange, selectedFilters } = useSearch();

	const { data = [] } = useOrganizations("Proponent/Certificate Holder");

	const items = useMemo(() => data.map(({ _id, name }) => ({ description: name, filterKey, key: _id })), [data]);

	const selected = useMemo(() => selectedFilters.filter(({ filterKey: fk }) => fk === filterKey), [selectedFilters]);

	return (
		<Filter
			icon={<BusinessCenterOutlinedIcon />}
			items={items}
			onChange={(filters) => onFilterChange(filterKey, filters)}
			selected={selected}
			title="Proponents"
		/>
	);
};

export default ProponentsFilter;
