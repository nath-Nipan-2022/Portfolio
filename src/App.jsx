import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div className="text-red-900 bg-red-500">404 page not found</div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
