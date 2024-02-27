import { useQuery } from "@tanstack/react-query";

import { MILLISECONDS_IN_HOUR } from "./constants";
import { getOrganizations } from "./endpoints";

const cacheKey = "organizations";

const queryOrganizations = async ({ queryKey: [_, type] }) => {
	const { data } = await getOrganizations(type);
	return data;
};

const useOrganizations = (type, { enabled = true } = {}) => {
	const organizationQuery = useQuery({
		enabled: !!type && !!enabled,
		queryFn: queryOrganizations,
		queryKey: [cacheKey, type],
		staleTime: MILLISECONDS_IN_HOUR,
	});

	return organizationQuery;
};

export default useOrganizations;
