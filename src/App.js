import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "pages/Home";

import { PAGE_PATHS } from "constants/general";

const App = () => {
	const router = createBrowserRouter([
		{ element: <Home />, path: PAGE_PATHS.HOME },
		{ element: <Home />, path: "*" },
	]);

	return <RouterProvider router={router} />;
};

export default App;
