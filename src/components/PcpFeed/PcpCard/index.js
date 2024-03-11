import * as moment from "moment-timezone";
import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: theme.palette.text.primary,
		background: "white",
		padding: "0.6rem 0 0.6rem 0",
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
			padding: "0.4rem 0.875rem 0.4rem 0.875rem",
			borderRadius: "1rem",
			fontSize: "0.875rem",
			lineHeight: "1rem",
			color: "white",
			display: "flex",
			justifyContent: "center",
			width: "5.624rem",
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

	const formattedDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(new Date(date));
	};

	const status = (startDate, endDate) => {
		if (startDate && endDate) {
			const now = new Date();
			const dateStarted = moment(startDate);
			const dateCompleted = moment(endDate);
			if (moment(now).isBetween(dateStarted, dateCompleted)) {
				return "Open";
			} else if (moment(now).isAfter(dateCompleted)) {
				return "Closed";
			} else {
				return "Upcoming";
			}
		}
	};

	const pcpStatus = status(dateStarted, dateCompleted);

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.header}>
					{projectName} - {phaseName}
				</div>
				<div className={classes.content}>
					<div>
						{formattedDate(dateStarted)} - {formattedDate(dateCompleted)}
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
