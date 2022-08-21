import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { posts, search } = useContext(DataContext);
  const searchResults = posts
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
      );
    })
    .reverse();
  return <main className="Home"></main>;
};

export default Home;
