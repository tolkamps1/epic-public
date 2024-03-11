import * as moment from "moment-timezone";
import { PropTypes } from "prop-types";
import { useMemo } from "react";
import { makeStyles } from "tss-react/mui";

import usePcps from "queries/usePcps";

import PcpCard from "./PcpCard";
import PcpFooter from "./PcpFooter";
import PcpHeader from "./PcpHeader";
import pcpImage from "./pcpImage.jpeg";

const useStyles = makeStyles()((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: "0.625rem",
		padding: "1rem 3rem 1rem 0",
		flex: "0 0 33%",
		color: theme.palette.text.primary,
		"@media (max-width: 44rem)": {
			flex: "1 0 100%",
			padding: "1rem",
		},
	},
	subheader: {
		color: theme.palette.text.primary,
		borderBottom: "1px solid #585858",
		paddingBottom: "0.625rem",
	},
	deck: {
		color: "black",
		background: "white",
		display: "flex",
		gap: "0.625rem",
		flexDirection: "column",
		boxShadow: "0.125rem 0.5rem 0.625rem 0 #00000026",
	},
	image: {
		height: "12rem",
		"& img": {
			height: "100%",
			width: "100%",
			objectFit: "cover",
		},
	},
	content: {
		padding: "0 2rem 0 1rem",
	},
}));

const PcpFeed = ({ setSelectedTab }) => {
	const { classes } = useStyles();

	const now = new Date();
	const thirtyDaysAgo = moment(now).subtract(30, "days").format("YYYY-MM-DD");

	const { data = [{ searchResults: [] }] } = usePcps(thirtyDaysAgo);
	const pcps = useMemo(
		() =>
			data[0].searchResults.map(({ _id, dateCompleted, dateStarted, project }) => ({
				dateCompleted,
				dateStarted,
				key: _id,
				phaseName: project.currentPhaseName.name,
				projectName: project.name,
			})),
		[data],
	);

	const handleTabButtonClick = (index) => {
		setSelectedTab(index);
	};

	return (
		<div className={classes.container}>
			<PcpHeader />
			<div className={classes.deck}>
				<div className={classes.image}>
					<img alt="Man at computer" aria-hidden="true" src={pcpImage} />
				</div>
				<div className={classes.content}>
					<div className={classes.subheader}>Upcoming, open, and recently closed Public Comment Periods:</div>
					{pcps.map((pcp) => (
						<PcpCard key={pcp.key} {...pcp} />
					))}
					<PcpFooter onButtonNavClick={handleTabButtonClick}></PcpFooter>
				</div>
			</div>
		</div>
	);
};

PcpFeed.propTypes = {
	setSelectedTab: PropTypes.func.isRequired,
};

export default PcpFeed;
