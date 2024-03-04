import { PROJECT_TYPES } from "constants";
import { useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";

import ReadMoreButton from "./ReadMoreButton";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "black",
		background: "white",
		padding: "1rem 1rem 0 1rem",
		display: "flex",
		gap: "10px",
		flexDirection: "row",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	detailsHeader: {
		alignItems: "center",
		display: "flex",
		color: "bcBlack",
		width: "100%",
		justifyContent: "space-between",
	},
	projectName: {
		fontWeight: 700,
		fontSize: 22,
		color: "#195A96",
	},
	updateDate: {
		fontSize: 16,
	},
	subheader: {
		display: "flex",
		gap: "1rem",
		fontWeight: 700,
		fontSize: 16,
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
		gap: "8px",
	},
	buttonPrimary: {
		padding: "12px 16px",
		fontWeight: "700",
		fontSize: 14,
		height: "2rem",
	},
	buttonSecondary: {
		padding: "12px 16px",
		fontWeight: "700",
		fontSize: 14,
		height: "2rem",
	},
}));

const UpdateCard = ({ updateName, updateDate, updateContent, documentUrl, project, pcp }) => {
	const { classes } = useStyles();

	const updateContentRef = useRef(null);
	const [isClamped, setClamped] = useState(false);
	const [isExpanded, setExpanded] = useState(false);
	const isSingleDoc = documentUrl !== null && documentUrl !== "" && !documentUrl.includes("docs?folder");
	const pcpUrl = pcp ? (pcp.isMet && pcp.metURL ? pcp.metURL : `/p/${project._id}/cp/${pcp._id}`) : "";

	// Set Read More button
	useEffect(() => {
		function handleResize() {
			if (updateContentRef && updateContentRef.current) {
				setClamped(updateContentRef.current.scrollHeight > updateContentRef.current.clientHeight);
			}
		}
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleReadMore = () => {
		setExpanded(!isExpanded);
	};

	const projectTypeIcon = (projectType) => {
		return PROJECT_TYPES.filter((type) => type.key === projectType)[0].icon || { projectType };
	};

	const formattedDate = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(updateDate));

	return (
		<div className={classes.container}>
			<div className={classes.icon}>{projectTypeIcon(project.type)}</div>
			<div className={classes.details}>
				<div className={classes.detailsHeader}>
					<div className={classes.projectName}>{project.name} - Work</div>
					<div className={classes.updateDate}>{formattedDate}</div>
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
						{pcp && (
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

export default UpdateCard;
