import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Overview from "./components/overview/Overview";
import Skills from "./components/skills/Skills";
import 'animate.css';
import ProjectDetails from "./components/projectDetails/ProjectDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import ProjectsPage from "./components/projectsPage/ProjectsPage";
import Certificates from "./components/certificates/Certificates";
import ContactPage from "./components/contact/ContactPage";
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
        children: [
          {
            path: "",
            element: <ProjectsPage />,
          },
          {
          path: "projectDetails/:id",
          element: <ProjectDetails />,
        }
      ]
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  const client = new QueryClient();
  return  <QueryClientProvider client={client}><RouterProvider router={router}></RouterProvider></QueryClientProvider>;
}
export default App;
