import { useQuery } from "@tanstack/react-query";

import { MILLISECONDS_IN_HOUR } from "./constants";
import { getPcps } from "./endpoints";

const cacheKey = "pcps";

const queryPcps = async ({ queryKey: [_, thirtyDaysAgo] }) => {
	const { data } = await getPcps(thirtyDaysAgo);
	return data;
};

const usePcps = (thirtyDaysAgo, { enabled = true } = {}) => {
	const pcpQuery = useQuery({
		enabled: !!thirtyDaysAgo && !!enabled,
		queryFn: queryPcps,
		queryKey: [cacheKey, thirtyDaysAgo],
		staleTime: MILLISECONDS_IN_HOUR,
	});
	return pcpQuery;
};

export default usePcps;
