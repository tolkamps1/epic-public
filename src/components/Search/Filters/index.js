import { makeStyles } from "tss-react/mui";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";

import { useSearch } from "contexts/Search";

import { getFilterComponent } from "./services";

const useStyles = makeStyles()((theme) => ({
	container: {
		color: "white",
	},
	chips: {
		alignItems: "center",
		display: "flex",
		minHeight: "4rem",
	},
	clear: {
		marginLeft: "2rem",
	},
	list: {
		display: "flex",
		gap: "1rem",
		listStyleType: "none",
	},
	filters: {
		display: "flex",
		flexWrap: "wrap",
		gap: "1rem",
		paddingBottom: "1rem",
	},
	label: {
		fontWeight: 700,
	},
}));

const Filters = () => {
	const { classes } = useStyles();

	const { filters = [], onClearFilters, onRemoveFilter, selectedFilters } = useSearch();

	return (
		<section aria-labelledby="filters_label" className={classes.container}>
			<div className={classes.chips}>
				<div className={classes.label} id="filters_label">
					Filters:
				</div>
				{!!selectedFilters.length && (
					<>
						<ul className={classes.list}>
							{selectedFilters.map(({ color = "success", description, filterKey, key }, i) => (
								<li key={i}>
									<Chip color={color} label={description} onDelete={() => onRemoveFilter(filterKey, key)} />
								</li>
							))}
						</ul>
						<Button className={classes.clear} color="secondary" onClick={onClearFilters}>
							Clear Filters <FilterAltOffOutlinedIcon />
						</Button>
					</>
				)}
			</div>
			<div className={classes.filters}>{filters.map((filterKey) => getFilterComponent(filterKey))}</div>
		</section>
	);
};

export default Filters;
