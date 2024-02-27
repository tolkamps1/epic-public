import { useSearch } from "contexts/Search";

const ProjectResults = () => {
	const { isSearching, searchTerm } = useSearch();

	return <div>{isSearching && searchTerm && `Searching for ${searchTerm}...`}</div>;
};

export default ProjectResults;
