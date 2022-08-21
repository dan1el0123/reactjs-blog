import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <DataContext.Provider
      value={{ posts, setPosts, search, setSearch, fetchError, isLoading }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
