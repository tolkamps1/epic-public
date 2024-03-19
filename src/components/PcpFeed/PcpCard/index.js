import PropTypes from "prop-types";
import { useMemo } from "react";
import { makeStyles } from "tss-react/mui";

import { getFormatDateLongMonth, isAfterDate, isBetweenDates } from "services/date";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: theme.palette.text.primary,
		background: "white",
		padding: "0.625rem 0 0.625rem 0",
		display: "flex",
		gap: "0.625rem",
		flexDirection: "row",
		width: "100%",
		borderBottom: "1px solid #585858",
	},
	card: {
		width: "100%",
	},
	header: {
		fontWeight: 700,
	},
	content: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	status: {
		display: "inline-flex",
		marginLeft: "auto",
		"& div": {
			fontWeight: 700,
			padding: "0.375rem 0.875rem 0.375rem 0.875rem",
			borderRadius: "1rem",
			fontSize: "0.875rem",
			lineHeight: "1rem",
			color: "white",
			display: "flex",
			justifyContent: "center",
			width: "5.25rem",
		},
	},
	closed: {
		background: "#EF0A0A",
	},
	open: {
		background: "#31A35F",
	},
	upcoming: {
		background: "#FCBA19",
	},
}));

const PcpCard = ({ dateCompleted, dateStarted, phaseName, projectName }) => {
	const { classes } = useStyles();

	const formattedStartDate = getFormatDateLongMonth(new Date(dateStarted));
	const formattedCompletedDate = getFormatDateLongMonth(new Date(dateCompleted));

	const pcpStatus = useMemo(() => {
		if (dateStarted && dateCompleted) {
			const started = new Date(dateStarted);
			const completed = new Date(dateCompleted);
			if (isBetweenDates(started, completed)) {
				return "Open";
			}
			if (isAfterDate(completed)) {
				return "Closed";
			}
			return "Upcoming";
		}
	}, [dateStarted, dateCompleted]);

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.header}>
					{projectName} - {phaseName}
				</div>
				<div className={classes.content}>
					<div>
						{formattedStartDate} - {formattedCompletedDate}
					</div>
					<div className={classes.status}>
						<div
							className={
								pcpStatus === "Closed" ? classes.closed : pcpStatus === "Open" ? classes.open : classes.upcoming
							}
						>
							<span>{pcpStatus}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

PcpCard.propTypes = {
	dateCompleted: PropTypes.string.isRequired,
	dateStarted: PropTypes.string.isRequired,
	phaseName: PropTypes.string.isRequired,
	projectName: PropTypes.string.isRequired,
};

export default PcpCard;
