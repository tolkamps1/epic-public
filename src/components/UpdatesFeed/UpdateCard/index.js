import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

import { getProjectIcon } from "../services";
import ReadMoreButton from "./ReadMoreButton";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "black",
		background: "white",
		padding: "0.75rem 0.75rem 0 0.75rem",
		display: "flex",
		gap: "0.625rem",
		flexDirection: "row",
		"& svg": {
			color: "#585858",
			fontSize: "2rem",
		},
	},
	details: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	detailsHeader: {
		alignItems: "center",
		display: "flex",
		color: theme.palette.text.primary,
		width: "100%",
		justifyContent: "space-between",
	},
	projectName: {
		fontWeight: 700,
		fontSize: "1.375rem",
		color: "#195A96",
	},
	subheader: {
		display: "flex",
		gap: "1rem",
		fontWeight: 700,
		justifyContent: "space-between",
	},
	expandedContent: {
		overflow: "unset",
		display: "unset",
	},
	updateContent: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		WebkitLineClamp: "2",
		WebkitBoxOrient: "vertical",
	},
	footer: {
		display: "flex",
		flexWrap: "wrap-reverse",
		paddingBottom: "1rem",
		paddingTop: "1rem",
		justifyContent: "space-between",
	},
	buttonBar: {
		display: "flex",
		gap: "0.5rem",
	},
	buttonPrimary: {
		padding: "0.75rem 1rem",
		fontWeight: 700,
		fontSize: "0.875rem",
		height: "2rem",
	},
	buttonSecondary: {
		padding: "0.75rem 1rem",
		fontWeight: 700,
		fontSize: "0.875rem",
		height: "2rem",
	},
}));

const UpdateCard = ({ documentUrl, pcp, project, updateContent, updateDate, updateName }) => {
	const { classes } = useStyles();

	const [isClamped, setClamped] = useState(false);
	const [isExpanded, setExpanded] = useState(false);

	const updateContentRef = useRef(null);

	const formattedDate = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(updateDate));

	const isSingleDoc = documentUrl && !documentUrl.includes("docs?folder");
	const pcpUrl = pcp ? (pcp.isMet && pcp.metURL ? pcp.metURL : `/p/${project._id}/cp/${pcp._id}`) : "";

	const handleReadMore = () => {
		setExpanded((isExpanded) => !isExpanded);
	};

	// Set Read More button
	useEffect(() => {
		function handleResize() {
			if (updateContentRef.current) {
				setClamped(updateContentRef.current.scrollHeight > updateContentRef.current.clientHeight);
			}
		}
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={classes.container}>
			<div>{getProjectIcon(project.type)}</div>
			<div className={classes.details}>
				<div className={classes.detailsHeader}>
					<div className={classes.projectName}>{project.name} - Work</div>
					<div>{formattedDate}</div>
				</div>
				<div className={classes.subheader}>
					<div>{updateName}</div>
					<div>
						{project.region} - Near {project.location}
					</div>
				</div>
				<div
					ref={updateContentRef}
					className={isExpanded ? classes.expandedContent : classes.updateContent}
					dangerouslySetInnerHTML={{ __html: updateContent }}
				/>
				<div className={classes.footer}>
					<div className={classes.buttonBar}>
						<a href={`/p/${project._id}/project-details`}>
							<Button className={classes.buttonPrimary} color="primary" variant="contained" size="small">
								View Project
							</Button>
						</a>
						{isSingleDoc && (
							<a href={documentUrl}>
								<Button className={classes.buttonSecondary} color="secondary" variant="contained" size="small">
									View Document(s)
								</Button>
							</a>
						)}
						{pcpUrl && (
							<a href={pcpUrl}>
								<Button className={classes.buttonSecondary} color="secondary" variant="contained" size="small">
									View Engagement
								</Button>
							</a>
						)}
					</div>
					{(isClamped || isExpanded) && <ReadMoreButton onClick={handleReadMore} expanded={isExpanded} />}
				</div>
			</div>
		</div>
	);
};

UpdateCard.propTypes = {
	documentUrl: PropTypes.string,
	pcp: PropTypes.object,
	project: PropTypes.object.isRequired,
	updateContent: PropTypes.string.isRequired,
	updateDate: PropTypes.string.isRequired,
	updateName: PropTypes.string.isRequired,
};

export default UpdateCard;
