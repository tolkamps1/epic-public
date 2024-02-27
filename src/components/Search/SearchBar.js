import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import { useSearch } from "contexts/Search";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
		display: "flex",
	},
	clearButton: {
		color: theme.palette.grey.main,
		fontSize: "1.25rem",
		marginLeft: "1rem",
	},
	searchButton: {
		fontSize: "1rem",
		fontWeight: 700,
		padding: "0 2rem",
		textTransform: "none",
	},
	searchIcon: {
		color: theme.palette.grey.main,
		fontSize: "2.5rem",
		marginRight: "1rem",
	},
	textField: {
		background: theme.palette.common.white,
		width: "100%",
		"& .MuiInputBase-root": {
			height: "3rem",
		},
	},
}));

const SearchBar = () => {
	const { classes } = useStyles();

	const { isSearching, onSearch, onSearchTermChange, searchTerm } = useSearch();

	return (
		<div className={classes.container}>
			<TextField
				className={classes.textField}
				disabled={isSearching}
				InputProps={{
					endAdornment: (
						<IconButton
							aria-label="clear search term"
							className={classes.clearButton}
							onClick={() => onSearchTermChange("")}
						>
							<CancelOutlinedIcon fontSize="small" />
						</IconButton>
					),
					onKeyDown: ({ code }) => code === "Enter" && onSearch(),
					startAdornment: <SearchIcon className={classes.searchIcon} />,
				}}
				onChange={({ target: { value = "" } = {} }) => onSearchTermChange(value)}
				placeholder="Search by keywords for Project Name, Project Type, Project Region, and Proponent"
				value={searchTerm}
			/>
			<Button
				className={classes.searchButton}
				color="secondary"
				disabled={!searchTerm || isSearching}
				onClick={onSearch}
				variant="contained"
			>
				Search
			</Button>
		</div>
	);
};

export default SearchBar;
