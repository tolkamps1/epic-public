import { PropTypes } from "prop-types";
import { makeStyles } from "tss-react/mui";

import { Button } from "@mui/material";

import { HOME_TAB_KEYS } from "constants/home";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
		display: "flex",
		padding: "0.625rem 1rem 0.625rem 0",
		width: "100%",
	},
	pcpButton: {
		fontSize: "1.25rem",
		paddingLeft: "0",
	},
}));

const PcpFooter = ({ onButtonNavClick }) => {
	const { classes } = useStyles();

	const onPcpClick = () => {
		onButtonNavClick(HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS);
	};

	return (
		<div className={classes.container}>
			<Button className={classes.pcpButton} color="primary" variant="text" onClick={onPcpClick}>
				Search all Public Comment Periods &gt;
			</Button>
		</div>
	);
};

PcpFooter.propTypes = {
	onButtonNavClick: PropTypes.func.isRequired,
};

export default PcpFooter;
