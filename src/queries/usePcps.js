import { useQuery } from "@tanstack/react-query";

import { MILLISECONDS_IN_HOUR } from "./constants";
import { getPcps } from "./endpoints";

import { formatDateOnlyISO } from "services/date";

const cacheKey = "pcps";

const queryPcps = async ({ queryKey: [_, isoDate] }) => {
	const { data } = await getPcps(isoDate);
	return data;
};

const usePcps = (date, { enabled = true } = {}) => {
	const isoDate = formatDateOnlyISO(date);

	const pcpQuery = useQuery({
		enabled: !!isoDate && !!enabled,
		queryFn: queryPcps,
		queryKey: [cacheKey, isoDate],
		staleTime: MILLISECONDS_IN_HOUR,
	});
	return pcpQuery;
};

export default usePcps;
