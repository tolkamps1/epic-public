import { HOME_TAB_KEYS } from "constants";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
		display: "flex",
		padding: "48px, 10px, 10px, 0px",
		justifyContent: "space-between",
	},
	headerTitle: {
		fontWeight: "700",
		fontSize: "32px",
		color: "black",
		margin: ".6rem 0 0 0",
	},
	line: {
		width: "86px",
		height: "2rem",
		borderBottom: "5px solid #FCBA19",
	},
	updatesButton: {
		alignSelf: "end",
		fontSize: 20,
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

export default UpdatesHeader;
