import { useContext } from "react";
import DataContext from "../context/DataContext";
import Feed from "./Feed";

const Home = () => {
  const { posts, search, fetchError, isLoading } = useContext(DataContext);
  const searchResults = posts
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
      );
    })
    .reverse();
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
