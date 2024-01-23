import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Overview from "./components/overview/Overview";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/projectDetails/ProjectDetails";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      ,
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}


export default App;
