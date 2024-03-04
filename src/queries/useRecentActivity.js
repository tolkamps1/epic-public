import { useQuery } from "@tanstack/react-query";

import { MILLISECONDS_IN_HOUR } from "./constants";
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
		staleTime: MILLISECONDS_IN_HOUR,
	});

	return recentActivityQuery;
};

export default useRecentActivity;
