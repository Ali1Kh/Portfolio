import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { Analytics } from "@vercel/analytics/react";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardLogin from "./components/Dashboard/DashboardLogin/DashboardLogin";
import AdminPanelRoute from "./routes/AdminPanelRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/projects",
        children: [
          {
            path: "",
            element: <ProjectsPage />,
          },
          {
            path: ":slug",
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/resume",
        element: <Resume />,
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
  {
    path: "/dashboard/",
    element: (
      <AdminPanelRoute>
        <Dashboard />
      </AdminPanelRoute>
    ),
  },
  {
    path: "/dashboard/dashboardLogin",
    element: <DashboardLogin />,
  },
]);

function App() {
  async function visitor() {
    await axios.get("https://api.ali1kh.com/visit");
  }
  useEffect(() => {
    visitor();
  });
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ProjectsProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProjectsProvider>
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  );
}
export default App;
