import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Overview from "./components/overview/Overview";
import Resume from "./components/Resume/Resume";
import "animate.css";
import ProjectDetails from "./components/projectDetails/ProjectDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import ProjectsPage from "./components/projectsPage/ProjectsPage";
import Certificates from "./components/certificates/Certificates";
import ContactPage from "./components/contact/ContactPage";
import toast, { Toaster } from "react-hot-toast";
import ProjectsProvider from "./components/context/projectsContext";
import { useEffect } from "react";
import axios from "axios";

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
        path: "/Resume",
        element: <Resume />,
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
          },
        ],
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
  async function visitor(){
    await axios.get("https://ali1kh.onrender.com/visit");
  }
  useEffect(()=>{
    visitor();
  })
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ProjectsProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProjectsProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
export default App;
