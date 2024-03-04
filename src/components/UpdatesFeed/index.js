import { useMemo } from "react";
import { makeStyles } from "tss-react/mui";

import useRecentActivity from "queries/useRecentActivity";

import UpdateCard from "./UpdateCard";
import UpdatesHeader from "./UpdatesHeader";

const useStyles = makeStyles()((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		padding: "1rem 1rem 1rem 3rem",
		flex: "0 0 66%",
	},
}));

const UpdatesFeed = ({ setSelectedTab }) => {
	const handleTabButtonClick = (index) => {
		setSelectedTab(index);
	};

	const { classes } = useStyles();

	const { data = [] } = useRecentActivity();
	const updates = useMemo(
		() =>
			data.map(({ _id, content, dateUpdated, headline, documentUrl, project, pcp }) => ({
				key: _id,
				updateContent: content,
				updateDate: dateUpdated,
				updateName: headline,
				project,
				documentUrl,
				pcp,
			})),
		[data],
	);

	return (
		<div className={classes.container}>
			<UpdatesHeader onButtonNavClick={handleTabButtonClick} />
			{updates.map((update) => (
				<UpdateCard onButtonNavClick={handleTabButtonClick} key={update.id} {...update} />
			))}
		</div>
	);
};

export default UpdatesFeed;
