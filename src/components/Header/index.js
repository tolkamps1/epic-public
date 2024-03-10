import { makeStyles } from "tss-react/mui";

import logo from "./header.png";

const useStyles = makeStyles()((theme) => ({
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
}));

const Header = () => {
	const { classes } = useStyles();

	return (
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
	);
};

export default Header;
