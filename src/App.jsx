import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
