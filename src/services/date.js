export const getFormatDateLongMonth = (date) => {
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);

	return formattedDate;
};

export const getFormatDateAsISOString = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
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
