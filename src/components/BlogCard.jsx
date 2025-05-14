// /src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="card">
    <img src={blog.image} alt={blog.title} />
    <h2>{blog.title}</h2>
    <p>{blog.description}</p>
    <Link to={`/blog/${blog.id}`}>Read More</Link>
  </div>
);

export default BlogCard;
