export const getFormatDateLongMonth = (date) => {
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);

	return formattedDate;
};

export const getFormatDateAsISOString = (date) => {
	return date.toISOString().substring(0, 10);
};

export const isAfterDate = (date) => {
	const currentDate = new Date();

	return currentDate > date;
};

export const isBetweenDates = (startDate, endDate) => {
	const currentDate = new Date();

	return currentDate >= startDate && currentDate <= endDate;
};

export const subtractDays = (date, daysToSubtract) => {
	const result = new Date(date);
	result.setDate(result.getDate() - daysToSubtract);

	return result;
};
