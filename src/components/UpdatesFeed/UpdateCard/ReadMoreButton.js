import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles()((theme) => ({
	readMore: {
		display: "flex",
		alignItems: "center",
		"& svg": {
			color: "#234075",
			fontSize: "2rem",
		},
	},
}));

const ReadMoreButton = ({ expanded, onClick }) => {
	const { classes } = useStyles();

	return (
		<Button onClick={onClick} variant="text">
			<span className={classes.readMore}>
				{expanded ? "Read Less" : "Read More"}
				{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
			</span>
		</Button>
	);
};

ReadMoreButton.propTypes = {
	expanded: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ReadMoreButton;
