import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

import { HOME_TAB_KEYS } from "constants";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
		display: "flex",
		padding: "3rem, 0.625rem, 0.625rem, 0",
		justifyContent: "space-between",
	},
	headerTitle: {
		fontWeight: 700,
		fontSize: "2rem",
		color: "black",
		margin: "0.625rem 0 0 0",
	},
	line: {
		width: "2.25rem",
		height: "2rem",
		borderBottom: "5px solid #FCBA19",
	},
	updatesButton: {
		alignSelf: "end",
		fontSize: "1.25rem",
	},
}));

const UpdatesHeader = ({ onButtonNavClick }) => {
	const { classes } = useStyles();

	const onUpdatesClick = () => {
		onButtonNavClick(HOME_TAB_KEYS.UPDATES);
	};

	return (
		<div className={classes.container}>
			<div>
				<div className={classes.line} />
				<h1 className={classes.headerTitle}>Updates</h1>
			</div>

			<Button className={classes.updatesButton} color="primary" variant="text" onClick={onUpdatesClick}>
				Search all Updates &gt;
			</Button>
		</div>
	);
};

UpdatesHeader.propTypes = {
	onButtonNavClick: PropTypes.func.isRequired,
};

export default UpdatesHeader;
