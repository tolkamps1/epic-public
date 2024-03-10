import { SearchProvider } from "contexts/Search";

import Search from "components/Search";

import ProjectResults from "./Results";

import { HOME_TAB_KEYS } from "constants";

const Projects = () => {
	return (
		<div>
			<SearchProvider tabKey={HOME_TAB_KEYS.PROJECTS}>
				<Search />
				<ProjectResults />
			</SearchProvider>
		</div>
	);
};

export default Projects;
