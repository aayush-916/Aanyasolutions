import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import "../App.css";

const BlogThree = () => {
  // Reverse and get only the latest three blogs
  const latestThreeBlogs = [...blogs].reverse().slice(0, 3);

  return (
    <div className="blog-list">
      <h1>Our latest blog</h1>
      <div className="grid">
        {latestThreeBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogThree;
