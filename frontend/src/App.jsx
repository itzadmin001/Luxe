import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const WebsiteMain = lazy(() => import("./Pages/WebsiteMain"));
const Store = lazy(() => import("./Pages/Store"));
const About = lazy(() => import("./Pages/About"));
const Home = lazy(() => import("./Pages/Home"))


function App() {


  const route = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteMain />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "store",
          element: <Store />
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }
  ])




  return (
    <RouterProvider router={route} />
  )
}

export default App
