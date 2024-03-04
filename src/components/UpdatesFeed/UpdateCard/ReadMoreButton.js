import React from "react";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles()((theme) => ({
	readMore: {
		display: "flex",
		alignItems: "center",
		fontSize: 16,
	},
}));

const ReadMoreButton = ({ onClick, expanded }) => {
	const { classes } = useStyles();

	return (
		<Button className={classes.container} onClick={onClick} variant="text">
			<span className={classes.readMore}>
				{expanded ? "Read Less" : "Read More"}
				{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
			</span>
		</Button>
	);
};

export default ReadMoreButton;
