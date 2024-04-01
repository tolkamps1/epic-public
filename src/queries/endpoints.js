import api from "services/api";

const apiConfig = {
	url:
		process.env.REACT_APP_API ||
		localStorage.getItem("from_public_server--remote_api_path") ||
		"http://localhost:3000/api/public",
};

export const getOrganizations = (type) => {
	return api.get(apiConfig, `/organization?companyType=${type}&sortBy=+name&fields=name`);
};

export const getPcps = (isoDate) => {
	return api.get(
		apiConfig,
		`/search?dataset=CommentPeriod&pageNum=0&pageSize=1000&sortBy=-dateStarted&populate=true&and[dateCompletedStart]=${isoDate}`,
	);
};

export const getRecentActivity = () => {
	return api.get(apiConfig, `/recentActivity?top=true`);
};
