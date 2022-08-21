import { useContext } from "react";
import DataContext from "../context/DataContext";

const Footer = () => {
  const { posts } = useContext(DataContext);
  const today = new Date();
  return (
    <footer className="Footer">
      <p>
        {posts.length} Blog {posts.length === 1 ? "Post" : "Posts"} | Copyright
        &copy; {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
