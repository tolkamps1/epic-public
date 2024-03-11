import { useQuery } from "@tanstack/react-query";

import { MILLISECONDS_IN_MINUTE } from "./constants";
import { getRecentActivity } from "./endpoints";

const cacheKey = "recentActivity";

const queryRecentActivity = async ({ queryKey: [_] }) => {
	const { data } = await getRecentActivity();
	return data;
};

const useRecentActivity = ({ enabled = true } = {}) => {
	const recentActivityQuery = useQuery({
		enabled: !!enabled,
		queryFn: queryRecentActivity,
		queryKey: [cacheKey],
		staleTime: 5 * MILLISECONDS_IN_MINUTE,
	});

	return recentActivityQuery;
};

export default useRecentActivity;
