import { HOME_TAB_KEYS } from "constants";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import logo from "assets/header.png";

import Projects from "./Projects";

const useStyles = makeStyles()((theme) => ({
	container: {},
	header: {
		display: "flex",
		gap: "1rem",
		justifyContent: "space-between",
		padding: "0.75rem 2rem 1rem 2rem",
		width: "100%",
	},
	brand: {
		alignItems: "center",
		display: "flex",
		flexWrap: "wrap",
		gap: "1rem",
		"& h1": {
			margin: 0,
		},
		"& img": {
			height: "4rem",
		},
	},
	nav: {
		alignItems: "center",
		display: "flex",
		"& ul": {
			display: "flex",
			gap: "2rem",
			listStyleType: "none",
			margin: 0,
			padding: 0,
		},
		"& a": {
			fontWeight: 700,
			textDecoration: "none",
		},
	},
	selectedTab: {
		backgroundColor: theme.palette.primary.dark,
		borderRadius: "0.25rem 0.25rem 0 0",
		color: `${theme.palette.common.white} !important`,
	},
	tabs: {
		paddingLeft: "3rem",
	},
}));

const Home = () => {
	const { classes } = useStyles();

	const [selectedTab, setSelectedTab] = useState(HOME_TAB_KEYS.PROJECTS);

	return (
		<div className={classes.container}>
			<section aria-label="Header" className={classes.header}>
				<div className={classes.brand}>
					<img alt="EAO logo" aria-hidden="true" src={logo} />
					<h1>Project Information Centre</h1>
				</div>
				<nav aria-label="main" className={classes.nav}>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/process">The Environmental Assessment Process</a>
						</li>
						<li>
							<a href="/contact">Contact Us</a>
						</li>
					</ul>
				</nav>
			</section>
			<Tabs
				aria-label="Main"
				className={classes.tabs}
				onChange={(_, index) => setSelectedTab(index)}
				value={selectedTab}
			>
				<Tab classes={{ selected: classes.selectedTab }} label="Search Projects" tabIndex={0} />
				<Tab classes={{ selected: classes.selectedTab }} label="Search Documents" tabIndex={0} />
				<Tab classes={{ selected: classes.selectedTab }} label="Public Comment Periods" tabIndex={0} />
				<Tab classes={{ selected: classes.selectedTab }} label="Updates" tabIndex={0} />
				<Tab classes={{ selected: classes.selectedTab }} label="View Map" tabIndex={0} />
			</Tabs>
			<div role="tabpanel">
				{selectedTab === HOME_TAB_KEYS.PROJECTS ? (
					<Projects />
				) : selectedTab === HOME_TAB_KEYS.DOCUMENTS ? (
					<div>search documents</div>
				) : selectedTab === HOME_TAB_KEYS.PUBLIC_COMMENT_PERIODS ? (
					<div>public comment periods</div>
				) : selectedTab === HOME_TAB_KEYS.UPDATES ? (
					<div>updates</div>
				) : selectedTab === HOME_TAB_KEYS.MAP ? (
					<div>view map</div>
				) : (
					<div>uh oh</div>
				)}
			</div>
		</div>
	);
};

export default Home;
