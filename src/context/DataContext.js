import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <DataContext.Provider value={{ posts, setPosts, search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
