import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "pages/Home";

const App = () => {
	const router = createBrowserRouter([
		{ element: <Home />, path: "/" },
		{ element: <Home />, path: "*" },
	]);

	return <RouterProvider router={router} />;
};

export default App;
