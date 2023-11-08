import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Tech,
  Hero,
  Navbar,
  StarsCanvas,
  LoadingScreen,
  Works,
} from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="relative z-0">
          <LoadingScreen />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </main>
        </div>
      ),
      errorElement: (
        <div className="text-red-900 bg-red-500">404 page not found</div>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
