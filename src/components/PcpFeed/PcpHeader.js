import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
		display: "flex",
		padding: "4rem, 0.625rem, 0.625rem, 0",
		justifyContent: "space-between",
		width: "100%",
		flexDirection: "column",
	},
	headerTitle: {
		fontWeight: "700",
		fontSize: "1.5rem",
		color: "black",
		margin: "0.625rem 0 0 0",
	},
	line: {
		width: "2.25rem",
		height: "2rem",
		borderBottom: "5px solid #FCBA19",
	},
}));

const PcpHeader = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.container}>
			<div>
				<div className={classes.line} />
				<h1 className={classes.headerTitle}>Public Comment Periods</h1>
			</div>
		</div>
	);
};

export default PcpHeader;
