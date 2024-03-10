import React, { createContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
export const projectsContext = createContext();
export default function ProjectsProvider({ children }) {
  let { isLoading } = useQuery("projects");

  let [projects, setProjects] = useState([]);

  async function getProjects(filter) {
    try {
      let { data } = await axios.get(
        `https://ali1kh.onrender.com/projects?${
          filter?.search ? "search=" + filter?.search : ""
        }&${filter?.type ? "type=" + filter?.type : ""}&${
          filter?.limit ? "limit=" + filter?.limit : ""
        }`
      );
      setProjects(data.results);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <projectsContext.Provider value={{ projects, isLoading, getProjects }}>
      {children}
    </projectsContext.Provider>
  );
}
