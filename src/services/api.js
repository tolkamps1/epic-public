import axios from "axios";

const getRequestData = (apiConfig, route, method, data) => {
	const { path = "", stringifyData = false, url } = apiConfig;

	const requestData = {
		method: method,
		url: `${url}${path}${route}`,
	};

	if (data) {
		requestData.data = stringifyData ? JSON.stringify(data) : data;
	}
	return requestData;
};

const fetch = (apiConfig, route, method, data) => {
	const { xhrFields = {} } = apiConfig;
	const axiosRequest = axios.create(xhrFields);
	const requestData = getRequestData(apiConfig, route, method, data);

	return axiosRequest.request(requestData);
};

const api = {
	delete: (apiConfig, route, data) => fetch(apiConfig, route, "DELETE", data),
	get: (apiConfig, route) => fetch(apiConfig, route, "GET"),
	patch: (apiConfig, route, data) => fetch(apiConfig, route, "PATCH", data),
	post: (apiConfig, route, data) => fetch(apiConfig, route, "POST", data),
	put: (apiConfig, route, data) => fetch(apiConfig, route, "PUT", data),
};

export default api;
